import { Header } from './components/Header/Header'
import { CarouselComponent } from './components/Carousel/CarouselComponent'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <Header />
        <CarouselComponent />
      </div>
    </div>
  )
}

export default App
