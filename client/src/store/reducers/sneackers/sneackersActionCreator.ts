import axios from 'axios'
import { URL } from 'constants/api'
import { ISneackers } from 'types/dataTypes'
import { AppDispatch } from '../../store'
import {
  sneackersFetching,
  sneackersFetchingError,
  sneackersFetchingSuccess,
} from './sneackersSlice'


export const fetchSneackers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(sneackersFetching())
    const { data } = await axios.get<ISneackers[]>(`${URL}/sneakers`)
    dispatch(sneackersFetchingSuccess(data))
  } catch (error) {
    dispatch(sneackersFetchingError((error as Error).message))
  }
}

export const fetchFavouriteSneackers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(sneackersFetching())
    const { data } = await axios.get<ISneackers[]>(`${URL}/sneakers/favourite`)
    dispatch(sneackersFetchingSuccess(data))
  } catch (error) {
    dispatch(sneackersFetchingError((error as Error).message))
  }
}

export const fetchSneackersInCart = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(sneackersFetching())
    const { data } = await axios.get<ISneackers[]>(`${URL}/sneakers/cart`)
    dispatch(sneackersFetchingSuccess(data))
  } catch (error) {
    dispatch(sneackersFetchingError((error as Error).message))
  }
}

export const updateSneackers = (item: ISneackers) => async () => {
  try {
    await axios.put<ISneackers>(`${URL}/sneakers/${item.id}`, item)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

