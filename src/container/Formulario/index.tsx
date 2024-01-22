import { Titulo } from '../../styles'
import * as S from './styles'
import { Botao } from '../../styles/index'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contato'

const Cadastro = () => {
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefone, setTelefone] = useState<number>(0)

  const dispatch = useDispatch()

  const cadastraContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    )
  }

  return (
    <S.Form onSubmit={cadastraContato}>
      <S.Campo>
        <Titulo as="label" htmlFor="nome">
          Nome
        </Titulo>
        <input
          type="text"
          id="nome"
          required
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </S.Campo>
      <S.Campo>
        <Titulo as="label" htmlFor="email">
          Email
        </Titulo>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </S.Campo>
      <S.Campo>
        <Titulo as="label" htmlFor="telefone">
          Telefone
        </Titulo>
        <input
          type="text"
          id="telefone"
          required
          value={isNaN(telefone) || telefone === 0 ? '' : telefone}
          onChange={({ target }) => setTelefone(parseInt(target.value))}
        />
      </S.Campo>
      <Botao type="submit">Cadastrar</Botao>
    </S.Form>
  )
}

export default Cadastro
