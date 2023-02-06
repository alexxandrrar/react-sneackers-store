import React from 'react'
import { MainLayout } from 'pages/MainLayout/MainLayout'
import { CartPage } from 'pages/CartPage/CartPage'
import { FavouritesPage } from './../pages/FavouritesPage/FavouritesPage'

export enum EPath {
  MAIN_PAGE = '/',
  CART_PAGE = '/cart',
  FAVOURITES_PAGE = '/favourites',
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
  {
    path: EPath.FAVOURITES_PAGE,
    element: FavouritesPage,
  },
]
