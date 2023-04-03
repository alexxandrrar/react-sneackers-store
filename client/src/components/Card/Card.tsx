import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/reduxHook'
import {
  updateFavouriteSneackers,
  updateSneackersInCart,
} from 'store/reducers/sneackers/sneackersActionCreator'
import { ISneackers } from 'types/dataTypes'
import { Button } from 'components/Button/Button'
import { checkFavouriteButtonColor } from 'utils/checkFavouriteButtonColor'
import { HeartTwoTone, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import image from 'assets/img/1.jpg'

import style from './Card.module.scss'

export const Card: FC<ISneackers> = (sneackers) => {
  const dispatch = useAppDispatch()
  const { price, title, isFavourite, isInCart } = sneackers
  const [favouriteSneackers, setFavouriteSneackers] = useState<string>(
    checkFavouriteButtonColor(isFavourite),
  )

  const checkIsSneackersInCart = (boolean: boolean) =>
    boolean === true ? <ShoppingCartOutlined /> : <PlusOutlined />
  const [sneackersInCart, setSneackersInCart] = useState<boolean>(isInCart)

  const onFavouriteButtonClick = () => {
    dispatch(updateFavouriteSneackers({ ...sneackers, isFavourite: !isFavourite }))
    setFavouriteSneackers(checkFavouriteButtonColor(!isFavourite))
  }

  const onCartButtonClick = () => {
    dispatch(updateSneackersInCart({ ...sneackers, isInCart: !isInCart }))
    setSneackersInCart(!isInCart)
  }

  return (
    <div className={style.card}>
      <div className={style.btn}>
        <Button handleOnClick={onFavouriteButtonClick} buttonType='card-btn'>
          <HeartTwoTone twoToneColor={favouriteSneackers} />
        </Button>
      </div>
      <img className={style.image} src={image} alt='sneackers' />
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
