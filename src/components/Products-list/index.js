import React, { useEffect, useRef } from "react";
import { Main, Input, DivButtons, ButtonCategory, ButtonSort, Div, ContainerProducts, DivProduct } from "./styles"
import { produtos } from "../../assets/products"
import { useState } from "react";

export default function ProductsList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [isClicked, setIsClicked] = useState(null);
  const [array, setArray] = useState(produtos);
  const [isSorted, setIsSorted] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const divRef = useRef(null);

  //estou utilizando o 'useEffect' para verificar se a 'div' está vazia ou não
  useEffect(() => {
    if (divRef.current && divRef.current.innerHTML.trim() === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [search, isClicked]);


  //função para filtrar a lista de produtos pela categoria
  function filterCategory(buttonId, categoryType) {
    isClicked !== buttonId ? setIsClicked(buttonId) : setIsClicked(null)
    category !== categoryType ? setCategory(categoryType) : setCategory('')
  }

  //função para ordenar a lista de produtos pelo preço
  function filterSort(sortType) {
    if (isSorted === sortType) {
      setArray(produtos);
      setIsSorted('')
    } else if (sortType === 'crescente') {
      const sortedArray = [...produtos].sort((a, b) => a.preco - b.preco);
      setArray(sortedArray);
      setIsSorted(sortType)
    } else {
      const sortedArray = [...produtos].sort((a, b) => b.preco - a.preco);
      setArray(sortedArray);
      setIsSorted(sortType)
    }
  };

  return (
    <Main>
      <Input onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Pesquisar" />

      <DivButtons>
        {/* a props '$isClicked' começa com '$' para evitar que ela seja adicionada no DOM, evitando um erro  */}
        <ButtonCategory $isClicked={isClicked === 1} onClick={() => filterCategory(1, 'Computadores')}>Computadores</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 2} onClick={() => filterCategory(2, 'Acessórios')}>Acessórios</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 3} onClick={() => filterCategory(3, 'Monitores')}>Monitores</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 4} onClick={() => filterCategory(4, 'Impressoras')}>Impressoras</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 5} onClick={() => filterCategory(5, 'Tablets')}>Tablets</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 6} onClick={() => filterCategory(6, 'Smartphones')}>Smartphones</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 7} onClick={() => filterCategory(7, 'Wearables')}>Wearables</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 8} onClick={() => filterCategory(8, 'Redes')}>Redes</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 9} onClick={() => filterCategory(9, 'Armazenamento')}>Armazenamento</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 10} onClick={() => filterCategory(10, 'Câmeras')}>Câmeras</ButtonCategory>
        <ButtonCategory $isClicked={isClicked === 11} onClick={() => filterCategory(11, 'Software')}>Software</ButtonCategory>
      </DivButtons>

      <DivButtons>
        <ButtonSort $isSorted={isSorted === 'crescente'} onClick={() => filterSort('crescente')}>Crescente</ButtonSort>
        <ButtonSort $isSorted={isSorted === 'decrescente'} onClick={() => filterSort('decrescente')}>Decrescente</ButtonSort>
      </DivButtons>

      <Div ref={divRef}>
        {
          array.map((item) => (
            item.nome.toLowerCase().includes(search) &&
            item.categoria.includes(category) &&
            <ContainerProducts key={item.id}>
              <DivProduct>{item.nome}</DivProduct>
              <DivProduct>$ {item.preco}</DivProduct>
              <DivProduct>{item.categoria}</DivProduct>
            </ContainerProducts>
          ))
        }
      </Div>
      {isEmpty && <p>Nenhum produto encontrado</p>}
    </Main>
  );
}
