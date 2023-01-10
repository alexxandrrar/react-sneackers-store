import { ICardProps } from './../components/Card/Card'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SneackersState {
  items: ICardProps[]
  isLoaded: boolean
}

const initialState: SneackersState = {
  items: [],
  isLoaded: false,
}

export const sneackers = createSlice({
  name: 'sneackers',
  initialState,
  reducers: {
    setSneackers: (state, action: PayloadAction<ICardProps[]>) => {
      state.items = action.payload
      state.isLoaded = true
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload
    },
  },
})

export const { setSneackers, setLoaded } = sneackers.actions

export default sneackers.reducer
