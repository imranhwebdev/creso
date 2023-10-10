import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function Footer(){
    return(
        <footer className="footer text-center">
           <Container>
            <Row className='justify-content-center'>
                <Col lg={12}>
                    <div className="footer-top text-center">
                        <p>© Copyright 202 Mr.farahzad, Inc.</p>
                    </div>
                </Col>
            </Row>
           </Container>
           
        </footer>
    )
}