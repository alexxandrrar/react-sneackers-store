import { FC } from 'react'
import { Button } from '../Button/Button'

import style from './Card.module.scss'

interface ICardProps {
  id: number
  title: string
  price: number
  imageUrl: string
}

export const Card: FC<ICardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className={style.card}>
      <Button handleOnClick={() => console.log('Added to favourites')} buttonType='card-btn'>
        ♡
      </Button>
      <img height='100' src={imageUrl} alt='sneackers' />
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
