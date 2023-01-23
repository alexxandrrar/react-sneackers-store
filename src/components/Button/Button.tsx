import React, { FC } from 'react'
import { TButtonStyles } from 'types/commonTypes'
import { checkButtonStyles } from 'utils/checkButtonStyles'
import style from './Button.module.scss'

interface IButtonProps {
  children?: React.ReactNode
  handleOnClick: () => void
  buttonType: TButtonStyles
}

export const Button: FC<IButtonProps> = ({ children, handleOnClick, buttonType }) => {
  return (
    <button className={style.button} onClick={handleOnClick} style={checkButtonStyles(buttonType)}>
      {children}
    </button>
  )
}
