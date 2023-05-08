import { Cart } from 'pages/Cart/Cart'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import cart from 'assets/images/cart.svg'
import heart from 'assets/images/heart.svg'
import user from 'assets/images/user.svg'

import style from './Navigation.module.scss'

export const Navigation = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const showCart = () => setOpen(true)
  
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <a onClick={showCart}>
            <img width={18} height={18} src={cart} alt='Cart' />
          </a>
        </li>
        <li>
          <a onClick={() => navigate('/favourites')}>
            <img width={18} height={18} src={heart} alt='Favourites' />
          </a>
        </li>
        <li>
          <a>
            <img width={18} height={18} src={user} alt='User' />
          </a>
        </li>
      </ul>
      <Cart open={open} setOpen={setOpen} />
    </div>
  )
}
