/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { sneackersSlice } from 'store/reducers/sneackers/sneackersSlice'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'

export const customTestRender = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      preloadedState,
      reducer: {
        sneackers: sneackersSlice as any,
      },
    }),
    ...options
  } = {} as any,
) => {
  const CustomWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    )
  }
  return render(ui, { wrapper: CustomWrapper, ...options })
}

export * from '@testing-library/react'
