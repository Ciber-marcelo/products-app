import styled from 'styled-components';

export const Main = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   padding: 2rem;
`;

export const Div = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: auto;
   max-width: 830px;
   gap: 0.5rem;
`;

export const ContainerProducts = styled.div`
   display: flex;
   padding: 0.5rem;
   gap: 0.5rem;
   border-radius: 0.5rem;
   background-color: blue;

   @media (max-width: 900px) {
      flex-direction: column;
   }
`;

export const DivProduct = styled.div`
   display: flex;
   justify-content: center;
   border-radius: 0.5rem;
   padding: 0.5rem;
   width: 250px;
   background-color: white;
   font-weight: bold;
`;

export const Input = styled.input`
   width: 100%;
   max-width: 300px;
   box-sizing: border-box;
   border: 2px solid blue;
   border-radius: 0.5rem;
   padding: 0.5rem;
`;

export const DivButtons = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 0.5rem;
   width: auto;
   max-width: 830px;

   @media (max-width: 900px) {
      max-width: 282px;
   }
`;

export const ButtonCategory = styled.button`
   display: flex;
   justify-content: center;
   width: 120px;
   border: none;
   border-radius: 0.5rem;
   padding: 0.5rem;
   background-color: ${props => props.$isClicked ? 'blue' : 'gray'};
   color: white;
`;

export const ButtonSort = styled.button`
   display: flex;
   justify-content: center;
   width: 120px;
   border: 2xp solid gray;
   border-radius: 0.5rem;
   padding: 0.5rem;
   color: white;
   background-color: ${props => props.$isSorted ? 'blue' : 'none'};
   color: ${props => props.$isSorted ? 'white' : 'black'};
`;




