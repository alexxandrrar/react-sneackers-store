import { Header } from './components/Header/Header'
import { CarouselComponent } from './components/CarouselComponent/CarouselComponent'
import { MainLayout } from './pages/MainLayout/MainLayout'

import './App.css'

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
