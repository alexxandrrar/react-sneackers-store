import React, { FC } from 'react'
import { checkButton } from '../../utils/checkButton'
import style from './Button.module.scss'

interface IButtonProps {
  children?: React.ReactNode
  handleOnClick: () => void
  buttonType: string
}

export const Button: FC<IButtonProps> = ({ children, handleOnClick, buttonType }) => {
  return (
    <button className={style.button} onClick={handleOnClick} style={checkButton(buttonType)}>
      {children}
    </button>
  )
}
