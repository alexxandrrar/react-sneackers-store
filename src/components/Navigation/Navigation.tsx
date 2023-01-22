import cart from 'assets/images/cart.svg'
import heart from 'assets/images/heart.svg'
import user from 'assets/images/user.svg'
import { useNavigate } from 'react-router'

import style from './Navigation.module.scss'

export const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <a onClick={() => navigate('/cart')}>
            <img width={18} height={18} src={cart} alt='Cart' />
          </a>
        </li>
        <li>
          <a onClick={() => navigate('/liked')}>
            <img width={18} height={18} src={heart} alt='Liked' />
          </a>
        </li>
        <li>
          <a>
            <img width={18} height={18} src={user} alt='User' />
          </a>
        </li>
      </ul>
    </div>
  )
}
