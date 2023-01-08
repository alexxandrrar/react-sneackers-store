import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'

import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>
  )
}
