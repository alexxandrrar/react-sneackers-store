import React from 'react'
import { MainLayout } from 'pages/MainLayout/MainLayout'
import { FavouritesPage } from './../pages/FavouritesPage/FavouritesPage'

export enum EPath {
  MAIN_PAGE = '/',
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
    path: EPath.FAVOURITES_PAGE,
    element: FavouritesPage,
  },
]
