import { FC } from 'react'
import { Input } from 'antd'
import style from './SearchComponent.module.scss'

const { Search } = Input

interface ISearchComponentProps {
  onSearch(value: string): void
}

export const SearchComponent: FC<ISearchComponentProps> = ({ onSearch }) => {
  return (
    <Search
      placeholder='Search...'
      allowClear={true}
      onSearch={onSearch}
      className={style.search}
    />
  )
}
