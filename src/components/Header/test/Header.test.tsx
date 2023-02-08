import { customTestRender } from 'utils/customTestRender'
import { Header } from '../Header'

describe('Header component', () => {
  it('Should render Header logo', () => {
    const { getByTestId } = customTestRender(<Header />, {})
    const logo = getByTestId('headerLogo')

    expect(logo).toBeInTheDocument()
  })
})
