import { ICardProps } from 'components/Card/Card'

export interface ISneackers extends ICardProps {
  id: number
  title: string
  price: number
  imageUrl: string
}
