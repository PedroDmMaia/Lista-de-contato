import { useState } from 'react'
import ContatoProps from '../../models/contatos'

import * as S from './styles'

type Props = ContatoProps

const Contato = ({ nome, email, telefone }: Props) => {
  const [corCard, setCorCard] = useState('transparent')

  const trocaCor = () => {
    corCard === '#fff' ? setCorCard('transparent') : setCorCard('#fff')
  }

  return (
    <S.Card cor={corCard}>
      <p>{nome}</p>
      <p>{email}</p>
      <p>{telefone}</p>
      <div>
        <S.BotaoContato cor={corCard}>Deletar</S.BotaoContato>
        <S.BotaoContato cor={corCard} onClick={trocaCor}>
          Editar
        </S.BotaoContato>
      </div>
    </S.Card>
  )
}

export default Contato
