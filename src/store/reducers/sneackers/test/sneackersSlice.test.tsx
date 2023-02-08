import '@testing-library/jest-dom/extend-expect'
import sneackersSlice from 'store/reducers/sneackers/sneackersSlice'

describe('Sneackers reducer', () => {
  const initialReducerValue = {
    sneackers: [],
    isLoaded: false,
    error: '',
  }
  it('Should return the initial state', () => {
    expect(
      sneackersSlice(undefined, {
        type: undefined,
      }),
    ).toEqual(initialReducerValue)
  })
})
