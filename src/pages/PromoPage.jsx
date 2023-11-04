import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {kelasTerbaru} from '../data/index'

const PromoPage = () => {
  return (
    <div className='promo-page'>
        <div className='promo'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='fw-bold text-center'>Promo</h1>
                        <h5 className='text-center'>Promo Terbatas Sampai Dengan {Date()}</h5>
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
                                <h5 className='px-3'>{kelas.title}</h5>
                                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                    <p className='m-0 text-primary pw-bold'>Discount From <s>{kelas.pricebeforediscount}</s> To {kelas.price}</p>
                                    <button className='btn btn-danger rounded-3'>{kelas.buy}</button>
                                </div>
                            </Col>
                            }
                        )
                    }
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default PromoPage
