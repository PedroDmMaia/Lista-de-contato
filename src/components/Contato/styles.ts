import styled from 'styled-components'
import { Botao } from '../../styles'

type Props = {
  cor: string
}

export const Card = styled.div<Props>`
  padding: 20px;
  height: 55px;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.cor};
  color: ${(props) => (props.cor === '#fff' ? '#000' : '#fff')};
  border: 1px solid ${(props) => (props.cor === '#fff' ? '#000' : '#fff')};
  transition: all 0.5s ease;
`
export const BotaoContato = styled(Botao)<Props>`
  font-weight: normal;
  width: 70px;
  height: 36px;
  margin-left: 15px;
  border: 2px solid ${(props) => (props.cor === '#fff' ? '#000' : '#fff')};
  color: ${(props) => (props.cor === '#fff' ? '#000' : '#fff')};
`
