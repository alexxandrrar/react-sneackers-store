import { Carousel } from 'antd'
import carouselFirstSlideImage from 'assets/images/stanhder.jpg'
import carouselSecondSlideImage from 'assets/images/nike.jpg'
import style from './CarouselComponent.module.scss'

export const CarouselComponent = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <div className={style.carousel}>
      <Carousel afterChange={onChange}>
        <div>
          <img className={style.contentStyle} src={carouselFirstSlideImage} alt='Sneackers' />
        </div>
        <div>
          <img className={style.contentStyle} src={carouselSecondSlideImage} alt='Sneackers' />
        </div>
      </Carousel>
    </div>
  )
}
