import { Header } from './components/Header/Header'
import { CarouselComponent } from './components/CarouselComponent/CarouselComponent'

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

// <Card
//   id={1}
//   title={'Nike Crater Impact Sneakers'}
//   price={54654}
//   imageUrl='https://cdn.runrepeat.com/i/nike/25573/nike-men-s-air-zoom-structure-21-running-shoes-blue-navy-white-7-5-d-m-us-mens-blue-navy-white-9760-main.jpg'
// />

export default App
