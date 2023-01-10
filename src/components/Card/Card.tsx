import { FC } from 'react'
import { Button } from 'components/Button/Button'

import style from './Card.module.scss'

export interface ICardProps {
  id: number
  title: string
  price: number
  imageUrl: string
}

export const Card: FC<ICardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className={style.card}>
      <div className={style.btn}>
        <Button handleOnClick={() => console.log('Added to favourites')} buttonType='card-btn'>
          ♡
        </Button>
      </div>
      <img height='110' src={imageUrl} alt='sneackers' />
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
