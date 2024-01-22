import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Pedro',
      email: 'pedrodelmonico@hotmail.com',
      telefone: 11988050110
    },
    {
      id: 2,
      nome: 'Guilherme',
      email: 'guilherme@gmail.com',
      telefone: 1131192448
    },
    {
      id: 3,
      nome: 'Julia',
      email: 'julia@outlook.com',
      telefone: 1132254346
    },
    {
      id: 4,
      nome: 'Laura',
      email: 'laura@hotmail.com',
      telefone: 113322694125
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contato = action.payload

      if (state.itens.find((item) => item.telefone === contato.telefone)) {
        alert('Já possui um contato cadastrado com esse número')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens = [...state.itens, novoContato]
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((item) => item.telefone !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
