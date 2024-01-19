import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Pedro',
      email: 'pedrodelmonico@hotmail.com',
      telefone: 11988050110
    },
    {
      nome: 'Guilherme',
      email: 'viado@hotmail.com',
      telefone: 1131192448
    },
    {
      nome: 'Julia',
      email: 'julia@outlook.com',
      telefone: 1132254346
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contato = action.payload

      state.itens = [...state.itens, contato]
    }
  }
})

export const { adicionar } = contatoSlice.actions
export default contatoSlice.reducer
