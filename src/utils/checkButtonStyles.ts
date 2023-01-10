import { GREEN_STYLE_BUTTON, CARD_STYLE_BUTTON } from '../constants/constants'

export const checkButtonStyles = (type: string) => {
  switch (type) {
    case GREEN_STYLE_BUTTON:
      return {
        background: '#9DD458',
        borderRadius: '18px',
        height: '19px',
        width: '245px',
        color: '#FFFFFF',
      }
    case CARD_STYLE_BUTTON:
      return {
        height: '32px',
        width: '32px',
        background: '#FFFFFF',
        border: '1px solid #F2F2F2',
        borderRadius: '8px',
      }

    default:
      return {}
  }
}
