import { Drawer } from 'antd'
import { Button } from 'components/Button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchSneackers } from 'store/reducers/sneackers/sneackersActionCreator'
import { ISneackers } from 'types/dataTypes'
import sneackersImage from 'assets/img/1.jpg'
import emptyCard from 'assets/images/empty-cart.png'

import style from './Cart.module.scss'

interface ICartPageProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const Cart: FC<ICartPageProps> = ({ open, setOpen }) => {
  const { t } = useTranslation('common')
  // const dispatch = useAppDispatch()
  const { sneackers } = useAppSelector((state) => state.sneackersReducer)
  const sneackersInCart: ISneackers[] = sneackers.filter((item) => item.isInCart === true)
  console.log(sneackers)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <Drawer onClose={onClose} open={open}>
      <div className={style.title}>{t('Your cart:')}</div>
      {sneackersInCart.length === 0 ? (
        <div className={style.emptyCart}>
          <img width='300' src={emptyCard} alt='Empty Cart' />
        </div>
      ) : (
        <div>
          {sneackersInCart.map((card: ISneackers) => (
            <div className={style.sneackers} key={card.id}>
              <div className={style.text}>
                <div>{card.title}</div>
                <div>{card.price}₴</div>
              </div>
              <img height='100' src={sneackersImage} alt='sneackers' />
            </div>
          ))}
          <div className={style.button}>
            <Button
              handleOnClick={() => alert('Your order has been recieved')}
              buttonType='green-btn'
            >
              Create order
            </Button>
          </div>
        </div>
      )}
    </Drawer>
  )
}
