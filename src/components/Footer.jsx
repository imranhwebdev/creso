import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footer-logo.svg'
export default function Footer(){
    return(
        <footer className="footer">
           <Container>
          
            <Row>
                <Col lg={12}>
                    <div className="footer-content text-center">
                       <a href="/"> <img src={FooterLogo} alt="" /></a>
                        <p>© Copyright 202 Mr.farahzad, Inc.</p>
                    </div>
                </Col>
            </Row>
           </Container>
           
        </footer>
    )
}