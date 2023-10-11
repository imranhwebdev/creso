import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aboutleftimg from '../assets/img/about-left-img.png'
import Aboutcontentimg from '../assets/img/about-content-img.png'
import AboutRightArrowimg from '../assets/img/about-right-arrow.png'
export default function About(){
    return(
        <div className="about" id='about'>
            <Container>
                <div className="about-wrapper">
                    <Row className='align-items-center'>
                        <Col lg={6} className='order-2 order-lg-1'>
                            <div className="about-left">
                              <figure>
                                <img src={Aboutleftimg} alt="" />
                              </figure>
                            </div>
                        </Col>
                        <Col lg={6} className='order-1 order-lg-2'>
                            <div className="about-content">
                                <figure>
                                    <img src={AboutRightArrowimg} alt="" />
                                </figure>
                              <h2>Seedless <span>Login <img src={Aboutcontentimg} alt="" /></span></h2>
                              <p>Create and login to your wallet seamlessly with your Google, Twitter, or Apple account—no mnemonic fuss, just simple, swift access!</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
