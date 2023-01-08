import { FC } from 'react'
import { Input } from 'antd'

const { Search } = Input

export const SearchComponent: FC = () => {
  const onSearch = (value: string) => console.log(value)
  return <Search placeholder='Search...' onSearch={onSearch} style={{ width: 300 }} />
}
