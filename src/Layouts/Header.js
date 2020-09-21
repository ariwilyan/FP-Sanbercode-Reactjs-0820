import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, Redirect } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Header = () => {
    const [, user, setUser, isLogin, setIsLogin] = useContext(UserContext)

    useEffect(() => {
        if(user === null){
            if(JSON.parse(localStorage.getItem('user')) === null){
                setUser(null)
                setIsLogin(false)
            }else{
                let temp = JSON.parse(localStorage.getItem('user'))
                setUser({...temp})
                setIsLogin(true)
            }
        }
    })

    const redirecting = () => {
        window.location.href = '/'
    }

    const handleLogout = (e) => {
        let choice = window.confirm('Are you sure to Logout?')
        if (choice === true) {
            setIsLogin(false)
            localStorage.setItem("user", null)
            setUser(null)
            redirecting()
        }
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/home'>Home</Navbar.Brand>
                {
                    isLogin === false ? (
                        <>
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to='/login' exact>Login</Nav.Link>
                            <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                        </Nav>
                        </>
                    ) : (
                        <>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text className="text-light">
                                    Hello, {user.name}
                                </Navbar.Text>
                            </Navbar.Collapse>
                            <NavDropdown title="Account" id="nav-dropdown" className="ml-auto" style={{marginRight: "70px", color: "white"}} variant="light">
                                {/* <NavDropdown.Item eventKey="1.1" className="text-dark" disabled>Hello, {user.name}</NavDropdown.Item> */}
                                <NavDropdown.Item eventKey="1.1" as={NavLink} to='/profileaccount'>Profile</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1.2" as={NavLink} to='/editpassword'>Edit Password</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="1.3" onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>

                        {/* <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="text-light">
                            Hello, {user.name}
                            </Navbar.Text>
                        </Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to='/editpassword'>Edit Password</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </Nav> */}
                        </>
                    )
                }
        </Navbar>
    )
}

export default Header