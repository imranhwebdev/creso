import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SecurityImgkey from '../assets/img/key.png'
import SecurityImgRight from '../assets/img/security-img.png'
export default function Security(){
    return(
        <div className="security" id='security'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className="security-content">
                               <h2>
                                    <span className='bsecurityleft'>Boost Security 
                                        <img src={SecurityImgkey} alt="" />
                                    </span>
                                    <span className='bsecurityright'>  
                                        <img src={SecurityImgRight} alt="" />
                                        with 2FA
                                    </span> 
                                </h2>
                                <p>Enable two-factor authentication and add an extra security layer to your Zonan Wallet, ensuring no assets are withdrawn without verification from another device</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
