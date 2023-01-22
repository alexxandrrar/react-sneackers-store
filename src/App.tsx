import { Header } from './components/Header/Header'
import { MainLayout } from './pages/MainLayout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import { LikedPage } from 'pages/LikedPage/LikedPage'
import { CartPage } from 'pages/CartPage/CartPage'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <Header />
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/liked' element={<LikedPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
