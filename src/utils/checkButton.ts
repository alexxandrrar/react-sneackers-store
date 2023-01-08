export const checkButton = (type: string) => {
  switch (type) {
    case 'green-btn':
      return {
        background: '#9DD458',
        borderRadius: '18px',
        height: '19px',
        width: '245px',
        color: '#FFFFFF',
      }
    case 'card-btn':
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
