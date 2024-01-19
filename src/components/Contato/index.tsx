import ContatoProps from '../../models/contatos'

import * as S from './styles'

type Props = ContatoProps

const Contato = ({ nome, email, telefone }: Props) => {
  return (
    <S.Card>
      <p>{nome}</p>
      <p>{email}</p>
      <p>{telefone}</p>
      <div>
        <S.BotaoContato>Deletar</S.BotaoContato>
        <S.BotaoContato>Editar</S.BotaoContato>
      </div>
    </S.Card>
  )
}

export default Contato
