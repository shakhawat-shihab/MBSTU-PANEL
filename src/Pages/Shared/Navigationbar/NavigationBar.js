import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirerbase';
const NavigationBar = () => {
    const { user, logout } = useAuth();
    const signOutFromAccount = () => {
        logout();
    }
    console.log('user = ', user);
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/secure'>Secure</Nav.Link>
                            {
                                user?.email
                                    ?
                                    <>
                                        <Nav.Link as={Link} to='/profile'>{user?.displayName}</Nav.Link>
                                        <Nav.Link onClick={signOutFromAccount}>Log Out</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavigationBar;