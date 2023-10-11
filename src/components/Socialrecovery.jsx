import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Socialrightimg1 from '../assets/img/social-right-img1.png'
import Socialrightimg2 from '../assets/img/social-right-img-2.png'
import socialleftimg from '../assets/img/social-left-img.png'
export default function Socialrecovery(){
    return(
        <div className="socialrecovery" id='socialrecovery'>
            <img className='socialrecovery-left-img' src={socialleftimg} alt="" />
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
                            <h2>Social  <span>Recovery</span></h2>
                            <p>Total control, endless recovery possibilities! With familiar logins like email, Google, and Apple, secure your wallet the smart way. Add more guardians, amplify security, and recover with social backup whenever your account goes lost.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
