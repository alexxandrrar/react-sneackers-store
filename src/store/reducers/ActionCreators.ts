import axios from 'axios'
import { URL } from 'constants/api'
import { ICardProps } from 'components/Card/Card'
import { AppDispatch } from './../store'
import {
  sneackersFetching,
  sneackersFetchingError,
  sneackersFetchingSuccess,
} from './sneackersSlice'

export const fetchSneackers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(sneackersFetching())
    const { data } = await axios.get<ICardProps[]>(`${URL}/items`)
    dispatch(sneackersFetchingSuccess(data))
  } catch (error) {
    dispatch(sneackersFetchingError((error as Error).message))
  }
}
