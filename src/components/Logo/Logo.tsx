import logo from 'assets/images/logo.png'
import style from './Logo.module.scss'
import { LOGO_MAIN, LOGO_SUBTITLE } from 'constants/logo'

export const Logo = () => {
  return (
    <div className={style.logo}>
      <img width={40} height={40} src={logo} alt='logo' />
      <div>
        <h2 className={style.title}>{LOGO_MAIN}</h2>
        <h5 className={style.subtitle}>{LOGO_SUBTITLE}</h5>
      </div>
    </div>
  )
}
