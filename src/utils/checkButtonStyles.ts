import { TButtonStyles } from 'types/CommonTypes'

export const GREEN_STYLE_BUTTON = 'green-btn'
export const CARD_STYLE_BUTTON = 'card-btn'

export const checkButtonStyles = (type: TButtonStyles) => {
  switch (type) {
    case GREEN_STYLE_BUTTON:
      return {
        background: '#9DD458',
        borderRadius: '1.125rem',
        height: '1.188rem',
        width: '15.313rem',
        color: '#FFFFFF',
      }
    case CARD_STYLE_BUTTON:
      return {
        height: '2rem',
        width: '2rem',
        background: '#FFFFFF',
        border: '0.063rem solid #F2F2F2',
        borderRadius: '0.5rem',
      }

    default:
      return {}
  }
}
