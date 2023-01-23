import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'constants/path'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <Header />
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App
