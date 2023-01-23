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
