import { useEffect, useState } from 'react'
import ContatoProps from '../../models/contatos'

import * as S from './styles'

import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contato'

type Props = ContatoProps

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [corCard, setCorCard] = useState('transparent')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    if (
      nomeOriginal.length > 0 ||
      emailOriginal.length > 0 ||
      telefoneOriginal > 0
    ) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const trocaCor = () => {
    corCard === '#fff' ? setCorCard('transparent') : setCorCard('#fff')
  }

  const editando = () => {
    trocaCor()
    setEstaEditando(true)
  }

  const salvaAlteracao = () => {
    trocaCor()
    dispatch(
      editar({
        nome,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  const cancelaEdicao = () => {
    trocaCor()
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card cor={corCard}>
      <div>
        <S.Campo
          value={nome}
          disabled={!estaEditando}
          onChange={({ target }) => setNome(target.value)}
        />
        <S.campoEmail
          value={email}
          disabled={!estaEditando}
          onChange={({ target }) => setEmail(target.value)}
        />
        <S.Campo
          value={telefone === 0 || isNaN(telefone) ? '' : telefone.toString()}
          disabled={!estaEditando}
          onChange={({ target }) => setTelefone(Number(target.value))}
        />
      </div>
      <div>
        {estaEditando ? (
          <>
            <S.BotaoContato cor={corCard} onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoContato>
            <S.BotaoContato cor={corCard} onClick={salvaAlteracao}>
              Salvar
            </S.BotaoContato>
          </>
        ) : (
          <>
            <S.BotaoContato
              cor={corCard}
              onClick={() => dispatch(remover(telefone))}
            >
              Deletar
            </S.BotaoContato>
            <S.BotaoContato cor={corCard} onClick={editando}>
              Editar
            </S.BotaoContato>
          </>
        )}
      </div>
    </S.Card>
  )
}

export default Contato
