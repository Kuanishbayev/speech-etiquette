import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src={img1} />
        </div>
        <div className="embla__slide">
            <img src={img2} />
        </div>
        <div className="embla__slide">
            <img src={img3} />
        </div>
        <div className="embla__slide">
            <img src={img4} />
        </div>
      </div>
    </div>
  )
}