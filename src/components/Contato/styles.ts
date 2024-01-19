import styled from 'styled-components'
import { Botao } from '../../styles'

export const Card = styled.div`
  padding: 20px;
  height: 55px;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
`
export const BotaoContato = styled(Botao)`
  font-weight: normal;
  width: 70px;
  height: 36px;
  margin-left: 15px;
`
