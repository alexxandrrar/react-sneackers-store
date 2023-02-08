import { customTestRender, fireEvent } from 'utils/customTestRender'
import { Button } from '../Button'

describe('Button component', () => {
  it('Should render', () => {
    const { getByTestId } = customTestRender(
      <Button handleOnClick={() => console.log('CLicked')} buttonType={'green-btn'}>
        Click
      </Button>,
    )
    const button = getByTestId('button')
    expect(button).toBeInTheDocument()
  }),
    it('Should to call function on click', () => {
      const onClick = jest.fn()
      const { getByTestId } = customTestRender(
        <Button handleOnClick={onClick} buttonType={'green-btn'} />,
      )
      const button = getByTestId('button')
      fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    })
})
