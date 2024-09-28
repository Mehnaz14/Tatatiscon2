import React from 'react';
import {Container,Row,Col, Navbar,Nav, NavDropdown} from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
        <Container fluid>
        <Row>
            <Col>
                <Navbar fixed='top' bg='light' expand='md' collapseOnSelect>
                    <Container>
                    <Navbar.Brand href='#' id='nav-header'>
                      <img src='images/TSL.png'
                        className='align-top logo-img'
                        alt="TSL Logo"
                      />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='my-nav'/>
                    <Navbar.Collapse id='my-nav'>
                    <Nav className='me-auto fw-bold'>
                    <Nav.Link href='#' className='nav-item-spacing' > About Us</Nav.Link>
                    <NavDropdown title='Products' id='my-nav' className='nav-item-spacing'>
                      <NavDropdown.Item href='#'>Product 1 </NavDropdown.Item>
                      <NavDropdown.Item href='#'>Product 2 </NavDropdown.Item>
                      <NavDropdown.Item href='#'>Product 3 </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Services' id='my-nav' className='nav-item-spacing'>
                      <NavDropdown.Item href='#'>Service 1 </NavDropdown.Item>
                      <NavDropdown.Item href='#'>Service 2</NavDropdown.Item>
                      <NavDropdown.Item href='#'>Service 3 </NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link href='#'className='nav-item-spacing' > Building Guide</Nav.Link>
                    <Nav.Link href='#'className='nav-item-spacing' > Media</Nav.Link>
                    <Nav.Link href='#'className='nav-item-spacing' > Contact</Nav.Link>
                     

                    </Nav>
                    <Navbar.Brand href='#'>
                      <img src='images/Tata Tiscon Logo.png'
                        className='align-top logo-img'
                        alt="Tata Tiscon Logo"
                      />
                      </Navbar.Brand>

                    </Navbar.Collapse>
                    

                    </Container>

                </Navbar>
                <img src="images/refer-a-mate-banner 1.png" alt="Refer-a-Mate Banner" className="full-width-image" />
            

            </Col>
            </Row>
            

        
        
       
    
        
        </Container>
    </>
  );
};

export default MyNavbar;