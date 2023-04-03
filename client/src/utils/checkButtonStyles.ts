import { TButtonStyles } from 'types/buttonTypes'

export const GREEN_STYLE_BUTTON = 'green-btn'
export const CARD_STYLE_BUTTON = 'card-btn'

export const checkButtonStyles = (type: TButtonStyles) => {
  switch (type) {
    case GREEN_STYLE_BUTTON:
      return {
        background: '#9DD458',
        borderRadius: '1rem',
        height: '2.5rem',
        width: '100%',
        color: '#FFFFFF',
        fontSize: '1.2rem',
      }
    case CARD_STYLE_BUTTON:
      return {
        height: '2rem',
        width: '2rem',
        background: '#FFFFFF',
        border: '1.5PX solid #F2F2F2',
        borderRadius: '0.5rem',
      }
    default:
      return {}
  }
}
