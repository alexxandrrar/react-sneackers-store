/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { customTestRender, fireEvent } from 'utils/customTestRender'
import { SearchComponent } from '../SearchComponent'

describe('Search component', () => {
  it('Updates on search', () => {
    const setSearch = jest.fn()

    const { getByTestId } = customTestRender(<SearchComponent onSearch={setSearch} />)
    const searchInput = getByTestId('search')

    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput).toHaveDisplayValue('test')
  })
})
