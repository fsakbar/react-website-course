import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../assets/img/hero.png'
import {kelasTerbaru, dataSwiper} from '../data/index'
import { useNavigate } from 'react-router-dom'
import FaqComponent from '../components/FaqComponent'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import {Routes, Route} from 'react-router-dom'




const Homepage = () => {
  let navigate = useNavigate()
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
          <Container>
            <Row className='header-box d-flex align-items-center pt-lg-5'>
              <Col lg="6">
                <h1 className='mb-4'>Temukan <br /> <span>Bakat Kreatifmu</span> Bersama Kami!</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci laboriosam similique quas provident accusantium?</p>
                <a href="/kelas">
                  <button className='btn btn-outline-success btn-lg rounded mx-1 mb-xs-0 mb-2'>Lihat Kelas</button>
                </a>
                <a href="/promo">
                  <button className='btn btn-outline-danger btn-lg rounded mx-1 mb-2'>Lihat Promo</button>
                </a>
              </Col>       
              <Col lg="6" className='pt-lg-0 pt-5'>
                <img src={HeroImage} alt="hero-img" />
              </Col>
            </Row>
          </Container>
      </header>
      <div className='kelas w-100 min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>
                Kelas Terbaru
              </h1>
              <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, magni.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
                return <Col key={kelas.id}>
                  <img src={kelas.image} alt="unplash.com" className='w-100 mb- rounded'/>
                    <div className='star mb-2 px-3'>
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                  <h5 className='mb-5 px-3'>{kelas.title}</h5>
                  <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                    <p className='m-0 text-primary pw-bold'>{kelas.price}</p>
                    <button className='btn btn-danger rounded-3'>{kelas.buy}</button>
                  </div>
                  </Col>
                }
              )
            }
          </Row>

          <Row>
            <Col className='text-center'>
              <button className='btn btn-success rounded-5 btn-lg' onClick={()=>navigate('/kelas')}>Lihat Semua Kelas<i className='fa-solid fa-chevron-right ms-2'></i></button>

            </Col>
          </Row>
        </Container>
      </div>
      <div className='testimonial py-5'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Testimonial</h1>
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
              {dataSwiper.map((data) => {
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
      {/* Section FAQ */}
      <FaqComponent/>
      {/* Section FAQ */}
    </div>
  )
}

export default Homepage
