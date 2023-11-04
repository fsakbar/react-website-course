import {Container, Row, Col} from 'react-bootstrap'
import {testimonial} from '../data/index'
import FaqComponent from '../components/FaqComponent'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const TestimonialPage = () => {
  return (
    <div className='testimonial-page'>
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Semua Testimonial</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, enim.</p>
            </Col>
          </Row>
          <Row>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },

                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonial.map((data) => {
                  return(
                    <SwiperSlide className='p-3 rounded-2 shadow' key={data.id}>
                      <p className='desc p-2'>{data.desc}</p>
                      <div className='people'>
                        <img src={data.image} alt="" />
                        <div>
                          <h5 className='mb-1'>{data.name}</h5>
                          <p className='m-0 fw-bold'>{data.skill}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default TestimonialPage
