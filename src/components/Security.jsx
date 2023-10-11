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
                               <div className='bost_title d-flex justify-content-center'>
                                    <div className='bsecurityleft d-flex'>
                                        <h2><span>Boost</span> Security</h2>
                                       
                                    </div>
                                    <div className="key">
                                        <img src={SecurityImgkey} alt="" />
                                    </div>
                                    <span className='bsecurityright text-end'>  
                                        <img src={SecurityImgRight} alt="" />
                                        <h2><span>with</span> 2FA</h2>
                                    </span> 
                                </div>
                                <p>Enable two-factor authentication and add an extra security layer to your Zonan Wallet, ensuring no assets are withdrawn without verification from another device</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
