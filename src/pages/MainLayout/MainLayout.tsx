import { useEffect } from 'react'
import { SearchComponent } from 'components/SearchComponent/SearchComponent'
import { CarouselComponent } from 'components/CarouselComponent/CarouselComponent'
import { Card } from 'components/Card/Card'
import { Spin } from 'antd'
import { ISneackers } from 'types/dataTypes'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook'
import { fetchSneackers } from 'store/reducers/sneackers/sneackersActionCreator'
import { useTranslation } from 'react-i18next'

import style from './MainLayout.module.scss'

export const MainLayout = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { sneackers, isLoaded, error } = useAppSelector((state) => state.sneackersReducer)

  useEffect(() => {
    dispatch(fetchSneackers())
  }, [])

  return (
    <>
      <CarouselComponent />
      <div className={style.container}>
        <div className={style.info}>
          <h1 className={style.title}>{t('All sneackers:')}</h1>
          <SearchComponent />
        </div>
        {error && <h1>{error}</h1>}
        {isLoaded ? (
          <div className={style.loader}>
            <Spin size='large' />
          </div>
        ) : (
          <div className={style.cards}>
            {sneackers.map((card: ISneackers) => (
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
    </>
  )
}
