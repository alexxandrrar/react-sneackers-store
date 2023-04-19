import { Spin } from 'antd'
import { Card } from 'components/Card/Card'
import { useAppSelector, useAppDispatch } from 'hooks/reduxHook'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchFavouriteSneackers } from 'store/reducers/sneackers/sneackersActionCreator'
import { ISneackers } from 'types/dataTypes'
import noFavourites from 'assets/images/no-favourites.png'
import style from './FavouritesPage.module.scss'

export const FavouritesPage = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('common')
  const { sneackers, isLoaded, error } = useAppSelector((state) => state.sneackersReducer)

  useEffect(() => {
    dispatch(fetchFavouriteSneackers())
  }, [])

  return (
    <div className={style.container}>
      <h1 className={style.title}>{t('Favourite sneackers:')}</h1>
      {error && <h1>{error}</h1>}
      {isLoaded ? (
        <div className={style.loader}>
          <Spin size='large' />
        </div>
      ) : sneackers.length === 0 ? (
        <div className={style.favourites}>
          <img width='300' src={noFavourites} alt='No favourites' />
          <h2>You do not have favourite sneackers yet</h2>
        </div>
      ) : (
        <div className={style.cards}>
          {sneackers.map((card: ISneackers) => (
            <Card
              isInCart={card.isInCart}
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
  )
}
