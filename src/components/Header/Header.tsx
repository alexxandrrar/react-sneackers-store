import { Logo } from 'components/Logo/Logo'
import { Navigation } from 'components/Navigation/Navigation'

import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>
  )
}
