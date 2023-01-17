import { ICardProps } from '../../components/Card/Card'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SneackersState {
  sneackers: ICardProps[]
  isLoaded: boolean
  error: string
}

const initialState: SneackersState = {
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
    sneackersFetchingSuccess: (state, action: PayloadAction<ICardProps[]>) => {
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
