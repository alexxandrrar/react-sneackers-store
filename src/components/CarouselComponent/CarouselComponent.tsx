import { Carousel } from 'antd'
import carouselFirstSlideImage from 'assets/images/stanhder.jpg'
import carouselSecondSlideImage from 'assets/images/nike.jpg'
import style from './CarouselComponent.module.scss'

export const CarouselComponent = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  const contentStyle: React.CSSProperties = {
    borderRadius: '20px',
    height: '320px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  }

  return (
    <div className={style.carousel}>
      <Carousel afterChange={onChange}>
        <div>
          <img style={contentStyle} src={carouselFirstSlideImage} alt='Sneackers' />
        </div>
        <div>
          <img style={contentStyle} src={carouselSecondSlideImage} alt='Sneackers' />
        </div>
      </Carousel>
    </div>
  )
}
