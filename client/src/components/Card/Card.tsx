import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/reduxHook'
import {
  updateSneackers,
} from 'store/reducers/sneackers/sneackersActionCreator'
import { ISneackers } from 'types/dataTypes'
import { Button } from 'components/Button/Button'
import { checkFavouriteButtonColor } from 'utils/checkFavouriteButtonColor'
import { HeartTwoTone, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import style from './Card.module.scss'

export const Card: FC<ISneackers> = (sneackers) => {
  const dispatch = useAppDispatch()
  const { price, title, isFavourite, isInCart, imageUrl } = sneackers
  const [favouriteSneackers, setFavouriteSneackers] = useState<string>(
    checkFavouriteButtonColor(isFavourite),
  )

  const checkIsSneackersInCart = (boolean: boolean) =>
    boolean === true ? <ShoppingCartOutlined /> : <PlusOutlined />
  const [sneackersInCart, setSneackersInCart] = useState<boolean>(isInCart)

  const onFavouriteButtonClick = () => {
    dispatch(updateSneackers({ ...sneackers, isFavourite: !isFavourite }))
    setFavouriteSneackers(checkFavouriteButtonColor(!isFavourite))
  }

  const onCartButtonClick = () => {
    dispatch(updateSneackers({ ...sneackers, isInCart: !isInCart }))
    setSneackersInCart(!isInCart)
  }

  return (
    <div className={style.card}>
      <div className={style.btn}>
        <Button handleOnClick={onFavouriteButtonClick} buttonType='card-btn'>
          <HeartTwoTone twoToneColor={favouriteSneackers} />
        </Button>
      </div>
      <img className={style.image} src={imageUrl} alt='sneackers' />
      <p className={style.title}>{title}</p>
      <div className={style.info}>
        <div>
          <h5 className={style.textPrice}>Price:</h5>
          <h3 className={style.price}>{price}₴</h3>
        </div>
        <Button handleOnClick={onCartButtonClick} buttonType='card-btn'>
          {checkIsSneackersInCart(sneackersInCart)}
        </Button>
      </div>
    </div>
  )
}
