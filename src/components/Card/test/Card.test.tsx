import { customTestRender } from 'utils/customTestRender'
import { Card } from '../Card'
import { SneackersState } from './../../../store/reducers/sneackers/sneackersSlice'

describe('Card component', () => {
  const sneackers = [{ id: 453, title: 'NikeAirForce', price: 6903, imageUrl: 'img/5' }]

  const mockedState: SneackersState = {
    sneackers: [...sneackers],
    isLoaded: false,
    error: '',
  }

  const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  }

  it('Should display the amount of cards equal to sneackers length', async () => {
    const { findAllByTestId } = customTestRender(
      <Card id={0} title={''} price={0} imageUrl={''} />,
      { store: mockedStore },
    )
    const card = await findAllByTestId('card')
    expect(card.length).toBe(sneackers.length)
  })
})
