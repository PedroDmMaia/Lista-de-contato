import { Titulo } from '../../styles'
import * as S from './styles'
import { Botao } from '../../styles/index'

const Cadastro = () => {
  return (
    <S.Form>
      <S.Campo>
        <Titulo as="label" htmlFor="nome">
          Nome
        </Titulo>
        <input type="text" id="nome" required />
      </S.Campo>
      <S.Campo>
        <Titulo as="label" htmlFor="email">
          Email
        </Titulo>
        <input type="email" id="email" required />
      </S.Campo>
      <S.Campo>
        <Titulo as="label" htmlFor="telefone">
          Telefone
        </Titulo>
        <input type="number" id="telefone" required />
      </S.Campo>
      <Botao type="submit">Cadastrar</Botao>
    </S.Form>
  )
}

export default Cadastro
