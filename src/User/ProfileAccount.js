import Axios from 'axios'
import React, { useContext, useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { UserContext } from '../Context/UserContext'

const ProfileAccount = () => {
    const [, user, setUser, , ] = useContext(UserContext)
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    const redirecting = () => {
        window.location.href = '/home'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        redirecting()
    }

    const handleChange = (e) => {
        let value = e.target.value
        let temp = input
        switch(e.target.name){
            case 'name':
                temp.name = value
                setInput({...temp})
                break
            case 'email':
                temp.email = value
                setInput({...temp})
                break
            case 'password':
                temp.password = value
                setInput({...temp})
                break
            default:
                break
        }
    }

    return(
        <Container style={{minHeight: '100vh'}}>
            <Row>
                <Col>
                    <h2>Profile Account Page</h2>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control onChange={handleChange} type="text" name="name" placeholder="Masukkan Nama Lengkap" disabled value={user.name}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Alamat Email</Form.Label>
                            <Form.Control onChange={handleChange} type="email" name="email" placeholder="Masukkan Email" disabled value={user.email}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Back to Home Page
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileAccount