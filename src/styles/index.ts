import styled, { createGlobalStyle } from 'styled-components'

import fundo from '../assets/fundo.jpg'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    list-style: none;
    text-decaration: none;
  }
`

export const ImagemFundo = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Box = styled.div`
  width: 900px;
  height: 80vh;
  background: transparent;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 30px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Titulo = styled.h2`
  display: block;
  font-size: 20px;
  font-weight: bold;
`

export const Botao = styled.button`
  width: 120px;
  height: 40px;
  font-weight: bold;
  background: transparent;
  color: #fff;
  border-radius: 25px;
  border: 2px solid #fff;
  transition: all ease 0.3s;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`

export default EstiloGlobal
