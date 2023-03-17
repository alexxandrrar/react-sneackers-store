import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/reduxHook'
import { updateFavouriteSneackers } from 'store/reducers/sneackers/sneackersActionCreator'
import { ISneackers } from 'types/dataTypes'
import { Button } from 'components/Button/Button'
import { checkFavouriteButtonColor } from 'utils/checkFavouriteButtonColor'
import { HeartTwoTone } from '@ant-design/icons'
import image from 'assets/img/1.jpg'

import style from './Card.module.scss'

export const Card: FC<ISneackers> = (sneackers) => {
  const dispatch = useAppDispatch()
  const { price, title, isFavourite } = sneackers
  const [favouriteSneackers, setFavouriteSneackers] = useState<string>(
    checkFavouriteButtonColor(isFavourite),
  )

  const onFavouriteButtonClick = () => {
    dispatch(updateFavouriteSneackers({ ...sneackers, isFavourite: !isFavourite }))
    setFavouriteSneackers(checkFavouriteButtonColor(!isFavourite))
  }

  return (
    <div className={style.card}>
      <div className={style.btn}>
        <Button handleOnClick={onFavouriteButtonClick} buttonType='card-btn'>
          <HeartTwoTone twoToneColor={favouriteSneackers} />
        </Button>
      </div>
      <img height='110' src={image} alt='sneackers' />
      <p className={style.title}>{title}</p>
      <div className={style.info}>
        <div>
          <h5 className={style.textPrice}>Price:</h5>
          <h3 className={style.price}>{price}₴</h3>
        </div>
        <Button handleOnClick={() => console.log('Added to cart')} buttonType='card-btn'>
          +
        </Button>
      </div>
    </div>
  )
}
