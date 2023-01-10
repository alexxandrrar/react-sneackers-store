import logo from 'assets/images/logo.png'
import style from './Logo.module.scss'
import { LOGO_TEXT } from 'constants/constants'

export const Logo = () => {
  return (
    <div className={style.logo}>
      <img width={40} height={40} src={logo} alt='logo' />
      <div>
        <h2 className={style.title}>{LOGO_TEXT}</h2>
        <h5 className={style.subtitle}>Best sneackers store</h5>
      </div>
    </div>
  )
}
