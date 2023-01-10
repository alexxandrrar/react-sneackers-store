import { FC } from 'react'
import { Input } from 'antd'
import style from './SearchComponent.module.scss'

const { Search } = Input

export const SearchComponent: FC = () => {
  const onSearch = (value: string) => console.log(value)
  return <Search placeholder='Search...' onSearch={onSearch} className={style.search} />
}
