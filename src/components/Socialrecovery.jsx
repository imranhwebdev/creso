import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Socialrightimg1 from '../assets/img/social-right-img1.png'
import Socialrightimg2 from '../assets/img/social-right-img-2.png'
import socialleftimg from '../assets/img/social-left-img.png'
export default function Socialrecovery(){
    return(
        <div className="socialrecovery" id='socialrecovery'>
            <div className="socialrecovery-left-img">
                <figure>
                    <img src={socialleftimg} alt="" />
                </figure>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={{span: 5, offset: 7 }} >
                        <div className="socialrecovery-content">
                            <figure className='img1'>
                                <img src={Socialrightimg1} alt="" />
                            </figure>
                            <figure className='img2'>
                                <img src={Socialrightimg2} alt="" />
                            </figure>
                            <h2>Gasless <span>Transactions</span></h2>
                            <p>Use any token to manage gas fees. Relish the ease as an App or a friend takes care of the gas, turning every transaction into a smooth sail.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
