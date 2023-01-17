import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sneackersReducer from 'store/reducers/sneackersSlice'

const rootReducer = combineReducers({ sneackersReducer })

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
