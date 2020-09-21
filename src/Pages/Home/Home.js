import React, { useContext } from 'react'
import { Col, Container, Row, Nav, Card, Button } from 'react-bootstrap'
import {  NavLink, useRouteMatch } from 'react-router-dom'
import { DataProvider, DataContext } from '../../Context/DataContext'
import { UserContext } from '../../Context/UserContext'
import HomeRoutes from './HomeRoutes'


const Home = () => {
    const [, , , isLogin] = useContext(UserContext)
    let { path, url } = useRouteMatch()

    return(
        <DataProvider>
            {/* SideBar */}
            <Container fluid style={{minHeight: '100vh'}}>
                <Row>
                    <Col>
                        <Nav className="flex-column">
                            
                            {
                                isLogin === false ? (
                                    <>
                                        <Nav.Link as={NavLink} to={`${url}/movies`} className="text-primary">Movies</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={NavLink} to={`${url}/movies/list-movies`} className="text-primary">List Movies</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/movies/list-movies-editor`} className="text-primary">Form Movies Editor</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/movies/list-movies-editor/create`} className="text-primary">Add New Movies</Nav.Link>
                                    </>
                                )
                            }
                            
                            {
                                isLogin === false ? (
                                    <>
                                        <Nav.Link as={NavLink} to={`${url}/games`} className="text-danger">Games</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={NavLink} to={`${url}/games/list-games`} className="text-danger">List Games</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/games/list-games-editor`} className="text-danger">Form Games Editor</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/games/list-games-editor/create`} className="text-danger">Add New Games</Nav.Link>
                                    </>
                                )
                            }
                            <Nav.Link as={NavLink} to={`${url}/about`} className="text-success">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={10}>
                        <Container>
                            <HomeRoutes path={path} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </DataProvider>
    )
}

export default Home