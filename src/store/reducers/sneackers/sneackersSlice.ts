import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISneackers } from 'types/dataTypes'

export interface SneackersState {
  sneackers: ISneackers[]
  isLoaded: boolean
  error: string
}

export const initialState: SneackersState = {
  sneackers: [],
  isLoaded: false,
  error: '',
}

export const sneackersSlice = createSlice({
  name: 'sneackers',
  initialState,
  reducers: {
    sneackersFetching: (state) => {
      state.isLoaded = true
    },
    sneackersFetchingSuccess: (state, action: PayloadAction<ISneackers[]>) => {
      state.isLoaded = false
      state.error = ''
      state.sneackers = action.payload
    },
    sneackersFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoaded = false
      state.error = action.payload
    },
  },
})

export const { sneackersFetching, sneackersFetchingError, sneackersFetchingSuccess } =
  sneackersSlice.actions

export default sneackersSlice.reducer
