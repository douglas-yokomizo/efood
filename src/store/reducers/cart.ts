import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { MenuItem } from '../../types/api'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    add:(state, action: PayloadAction<MenuItem>) => {
      const dish = state.items.find(item => item.id === action.payload.id)

      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
