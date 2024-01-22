import styled from 'styled-components'

export const Lista = styled.ul`
  height: 60vh;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
  }
`
