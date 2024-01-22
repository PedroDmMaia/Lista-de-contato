import { useSelector } from 'react-redux'

import { Lista } from './styles'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contato.itens)

  return (
    <Lista>
      {contatos.map((item) => (
        <li key={item.nome}>
          <Contato
            id={item.id}
            nome={item.nome}
            email={item.email}
            telefone={item.telefone}
          />
        </li>
      ))}
    </Lista>
  )
}
export default ListaContatos
