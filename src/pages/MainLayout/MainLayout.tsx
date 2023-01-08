import axios from 'axios'
import { useEffect, useState } from 'react'
import { SearchComponent } from '../../components/SearchComponent/SearchComponent'
import { Card, ICardProps } from '../../components/Card/Card'
import { Skeleton } from 'antd'
import img from '../../assets/img/1.jpg'

import style from './MainLayout.module.scss'

export const MainLayout = () => {
  const url = 'https://60d62397943aa60017768e77.mockapi.io/items'
  const [sneackers, setSneackers] = useState<ICardProps[] | null>(null)

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(url)
        setSneackers(data)
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    }
    response()
  }, [sneackers])

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>All sneackers:</h1>
        <SearchComponent />
      </div>
      {sneackers !== null ? (
        <div className={style.cards}>
          {sneackers.map((card: ICardProps) => (
            <Card key={card.id} id={card.id} title={card.title} price={card.price} imageUrl={img} />
          ))}
        </div>
      ) : (
        <div>
          <Skeleton />
        </div>
      )}
    </div>
  )
}
