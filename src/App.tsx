import { Header } from './components/Header/Header'
import { CarouselComponent } from './components/CarouselComponent/CarouselComponent'

import './App.css'
import { MainLayout } from './pages/MainLayout/MainLayout'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <Header />
        <CarouselComponent />
        <MainLayout />
      </div>
    </div>
  )
}

export default App
