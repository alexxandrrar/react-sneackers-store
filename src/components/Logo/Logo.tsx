import logo from '../../assets/images/logo.png'
import style from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={style.logo}>
      <img width={40} height={40} src={logo} alt='logo' />
      <div>
        <h2 className={style.title}>REACT SNEACKERS</h2>
        <h5 className={style.subtitle}>Best sneackers store</h5>
      </div>
    </div>
  )
}
