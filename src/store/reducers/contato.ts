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

      if (state.itens.find((item) => item.telefone === contato.telefone)) {
        alert('Já possui um contato cadastrado com esse número')
      } else {
        state.itens = [...state.itens, contato]
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((item) => item.telefone !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (item) => item.telefone === action.payload.telefone
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
