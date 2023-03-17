import { Drawer } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ICartPageProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const Cart: FC<ICartPageProps> = ({ open, setOpen }) => {
  const { t } = useTranslation('common')
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Drawer onClose={onClose} open={open}>
      <div>{t('Your cart:')}</div>
    </Drawer>
  )
}
