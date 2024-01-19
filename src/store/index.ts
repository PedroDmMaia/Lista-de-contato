import { configureStore } from '@reduxjs/toolkit'

import contatoReducer from './reducers/contato'

export const store = configureStore({
  reducer: {
    contato: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
