import { useTranslation } from 'react-i18next'

export const CartPage = () => {
  const { t } = useTranslation('common')
  return <div>{t('Your cart:')}</div>
}
