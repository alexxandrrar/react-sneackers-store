import { configureStore } from '@reduxjs/toolkit'
import sneackers from './sneackers'

const store = configureStore({
  reducer: { sneackers },
})

export default store

export type RootState = ReturnType<typeof store.getState> //
export type AppDispatch = typeof store.dispatch
