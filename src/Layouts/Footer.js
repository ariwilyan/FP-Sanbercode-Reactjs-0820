import React from 'react'
import {Navbar} from 'react-bootstrap'

const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Text className="mx-auto" style={{color: "white"}}>Copyright &copy; 2020 by Ari Wilyan Ramadhelza</Navbar.Text>
        </Navbar>
    )
}

export default Footer