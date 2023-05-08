import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from 'assets/images/logo.png'
import style from './Logo.module.scss'

export const Logo = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('common')
  return (
    <div className={style.logo} onClick={() => navigate('/')}>
      <img width={40} height={40} src={logo} alt='logo' />
      <div>
        <h2 className={style.title}>{t('REACT SNEACKERS')}</h2>
        <h5 className={style.subtitle}>{t('Best sneackers store')}</h5>
      </div>
    </div>
  )
}
