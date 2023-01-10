import axios from 'axios'
import { URL } from 'constants/api'
import { useEffect } from 'react'
import { SearchComponent } from 'components/SearchComponent/SearchComponent'
import { Card, ICardProps } from 'components/Card/Card'
import { Spin } from 'antd'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook'
import { setSneackers } from 'store/sneackers'
import img from 'assets/img/1.jpg'

import style from './MainLayout.module.scss'

export const MainLayout = () => {
  const sneackers = useAppSelector((state) => state.sneackers.items)
  const isLoaded = useAppSelector((state) => state.sneackers.isLoaded)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`${URL}/items`)
        dispatch(setSneackers(data))
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    }
    response()
  })

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>All sneackers:</h1>
        <SearchComponent />
      </div>
      {isLoaded ? (
        <div className={style.cards}>
          {sneackers.map((card: ICardProps) => (
            <Card key={card.id} id={card.id} title={card.title} price={card.price} imageUrl={img} />
          ))}
        </div>
      ) : (
        <div className={style.loader}>
          <Spin size='large' />
        </div>
      )}
    </div>
  )
}
