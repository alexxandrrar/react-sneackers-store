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
    const { data } = await axios.get<ISneackers[]>(`${URL}/items`)
    dispatch(sneackersFetchingSuccess(data))
  } catch (error) {
    dispatch(sneackersFetchingError((error as Error).message))
  }
}

export const updateFavouriteSneackers = (item: ISneackers) => async () => {
  try {
    await axios.put<ISneackers>(`${URL}/items/${item.id}`, item)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const updateSneackersInCart = (item: ISneackers) => async () => {
  try {
    await axios.put<ISneackers>(`${URL}/items/${item.id}`, item)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
