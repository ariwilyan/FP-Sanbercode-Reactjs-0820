import React from 'react'
import { Card, Button, Col, Row, ListGroup } from 'react-bootstrap'
import { NavLink, useRouteMatch } from 'react-router-dom'

const GameListHome = (props) => {
    let { url } = useRouteMatch()

    return(
        <>
        {
            props.games === null ? (
            <>{
                <Row className="form-group">
                    <Col>
                        <h2>Tidak ada Games</h2>
                    </Col>
                </Row>
            }</>) : (
                <>
                    <Row>
                        <Col><h1>Games</h1></Col>
                    </Row>
                    <Row>
                        {
                            props.games.map(el => {
                                return (
                                    <Col lg={3} md={6}>
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src={el.image_url} />
                                            <Card.Body>
                                                <Card.Title>{el.name}</Card.Title>
                                                <ListGroup>
                                                    <ListGroup.Item>Genre : {el.genre}</ListGroup.Item>
                                                    <ListGroup.Item>Platform : {el.platform}</ListGroup.Item>
                                                    <ListGroup.Item>Release Year : {el.release}</ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Mode Allowed : {el.singlePlayer > 0 ? ('SinglePlayer') : ('none')} {el.multiplayer > 0 ? ('and Multiplayer'):('')}
                                                    </ListGroup.Item>
                                                </ListGroup>
                                                <Button variant="primary" value={el.id} as={NavLink} to={`${url}/single-games-detail/${el.id}`} style={{marginTop: "20px"}}>Show Detail</Button>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </>
            )
        }
        </>
    )
}

export default GameListHome