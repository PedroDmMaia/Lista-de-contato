import { Provider } from 'react-redux'

import Header from './components/Header'
import Cadastro from './container/Formulario'
import ListaContatos from './container/ListaDeContatos'

import { store } from './store'
import EstiloGlobal from './styles'
import * as S from './styles/index'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <S.ImagemFundo>
        <Header />
        <S.Box>
          <Cadastro />
          <ListaContatos />
        </S.Box>
      </S.ImagemFundo>
    </Provider>
  )
}

export default App
