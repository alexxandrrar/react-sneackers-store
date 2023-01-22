import { useTranslation } from 'react-i18next'

export const LikedPage = () => {
  const { t } = useTranslation()
  return <div>{t('Liked:')}</div>
}
