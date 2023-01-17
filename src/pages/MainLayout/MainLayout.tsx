import { useEffect } from 'react'
import { SearchComponent } from 'components/SearchComponent/SearchComponent'
import { Card, ICardProps } from 'components/Card/Card'
import { Spin } from 'antd'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook'
import { fetchSneackers } from 'store/reducers/ActionCreators'

import style from './MainLayout.module.scss'

export const MainLayout = () => {
  const { sneackers, isLoaded, error } = useAppSelector((state) => state.sneackersReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSneackers())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>All sneackers:</h1>
        <SearchComponent />
      </div>
      {error && <h1>{error}</h1>}
      {isLoaded ? (
        <div className={style.loader}>
          <Spin size='large' />
        </div>
      ) : (
        <div className={style.cards}>
          {sneackers.map((card: ICardProps) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  )
}
