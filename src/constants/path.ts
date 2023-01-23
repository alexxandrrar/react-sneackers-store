import React from 'react'
import { MainLayout } from 'pages/MainLayout/MainLayout'
import { CartPage } from 'pages/CartPage/CartPage'

export enum EPath {
  MAIN_PAGE = '/',
  CART_PAGE = '/cart',
}

type TPath = {
  path: string
  element: () => React.ReactElement
}

export const routes: TPath[] = [
  {
    path: EPath.MAIN_PAGE,
    element: MainLayout,
  },
  {
    path: EPath.CART_PAGE,
    element: CartPage,
  },
]
