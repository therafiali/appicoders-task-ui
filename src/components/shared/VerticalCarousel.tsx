import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

interface CarouselItem {
  id: string
  image: string
  alt: string
}

interface VerticalCarouselProps {
  items: CarouselItem[]
  autoplayDelay?: number
  showNavigation?: boolean
  showPagination?: boolean
  containerClassName?: string
  itemClassName?: string
  navigationClassName?: string
  loop?: boolean
  spaceBetween?: number
  slidesPerView?: number
  direction?: 'vertical' | 'horizontal'
  itemsPerSlide?: number
  customSlideContent?: (group: CarouselItem[], index: number) => React.ReactNode
}

const VerticalCarousel = ({
  items,
  autoplayDelay = 4000,
  showNavigation = true,
  showPagination = true,
  containerClassName = "relative mx-auto h-[500px] w-[520px] md:h-[540px] md:w-[560px] border-none bg-none",
  itemClassName = "rounded-full ",
  navigationClassName = "absolute right-[-60px] top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex",
  loop = false,
  spaceBetween = 20,
  slidesPerView = 1,
  direction = 'vertical',
  itemsPerSlide = 1, 
  customSlideContent
}: VerticalCarouselProps) => {
  // Group items based on itemsPerSlide
  const groupedItems = []
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    groupedItems.push(items.slice(i, i + itemsPerSlide))
  }

  return (
    <div className="relative mx-auto w-full max-w-[620px] md:ml-auto">
      {/* Glass container for vertical carousel */}
      <div className={containerClassName}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          direction={direction}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={showNavigation ? {
            nextEl: direction === 'vertical' ? '.swiper-button-next-vertical' : '.swiper-button-next-horizontal',
            prevEl: direction === 'vertical' ? '.swiper-button-prev-vertical' : '.swiper-button-prev-horizontal',
          } : false}
          pagination={showPagination ? {
            clickable: true,
            bulletClass: direction === 'vertical' ? 'swiper-pagination-bullet-vertical' : 'swiper-pagination-bullet-horizontal',
            bulletActiveClass: direction === 'vertical' ? 'swiper-pagination-bullet-active-vertical' : 'swiper-pagination-bullet-active-horizontal',
          } : false}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          loop={loop}
          className="h-full w-full"
        >
          {groupedItems.map((group, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              {customSlideContent ? (
                customSlideContent(group, index)
              ) : (
                <div className={`flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'} gap-4`}>
                  {group.map((item) => (
                    <div key={item.id} className="relative">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className={itemClassName}
                      />
                    </div>
                  ))}
                  {/* Fill empty space if needed */}
                  {group.length < itemsPerSlide && (
                    <div className={itemClassName}></div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation arrows */}
      {showNavigation && (
        <div className={navigationClassName}>
          <button className={`swiper-button-prev-${direction} grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20`}>
            {direction === 'vertical' ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            )}
          </button>
          <button className={`swiper-button-next-${direction} grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20`}>
            {direction === 'vertical' ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VerticalCarousel
