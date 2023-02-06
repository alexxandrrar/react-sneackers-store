import { useEffect, useState } from 'react'
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
  const { t } = useTranslation('common')
  const { sneackers, isLoaded, error } = useAppSelector((state) => state.sneackersReducer)
  const [filteredSneackers, setFilteredSneaclkers] = useState<ISneackers[] | null>(null)

  useEffect(() => {
    dispatch(fetchSneackers())
  }, [filteredSneackers])

  const onSearch = (value: string) => {
    setFilteredSneaclkers(
      sneackers.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())),
    )
  }

  return (
    <>
      <CarouselComponent />
      <div className={style.container}>
        <div className={style.info}>
          <h1 className={style.title}>{t('All sneackers:')}</h1>
          <SearchComponent onSearch={onSearch} />
        </div>
        {error && <h1>{error}</h1>}
        {isLoaded ? (
          <div className={style.loader}>
            <Spin size='large' />
          </div>
        ) : (
          <div className={style.cards}>
            {filteredSneackers !== null
              ? filteredSneackers.map((card: ISneackers) => (
                  <Card
                    isFavourite={card.isFavourite}
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    imageUrl={card.imageUrl}
                  />
                ))
              : sneackers.map((card: ISneackers) => (
                  <Card
                    isFavourite={card.isFavourite}
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
