import React from 'react'
import { Card, Button, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { NavLink, useRouteMatch } from 'react-router-dom'

function minuteToHours(num){
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return ( rhours === 0 ? "" : rhours + " Jam") + (rminutes === 0 ? "" : " " + rminutes + " Menit")
}

const MovieListHome = (props) => {
    let { url } = useRouteMatch()

    return(
        <>
        {
            props.movies === null ? (
            <>{
                <Row className="form-group">
                    <Col>
                        <h2>Tidak ada Film</h2>
                    </Col>
                </Row>
            }</>) : (
                <>
                    <Row>
                        <Col><h1>Movies</h1></Col>
                    </Row>
                    <Row>
                        {
                            props.movies.map(el => {
                                return (
                                    <Col lg={3} md={6}>
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src={el.image_url} />
                                            <Card.Body>
                                                <Card.Title>{el.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{el.year}</Card.Subtitle>
                                                <Card.Subtitle style={{marginTop: "5px"}}>Genre: {el.genre}</Card.Subtitle>
                                                <Card.Subtitle style={{marginTop: "5px"}}>Duration: {minuteToHours(el.duration)}</Card.Subtitle>
                                                <Card.Subtitle style={{marginTop: "5px"}}>Rating: {el.rating}</Card.Subtitle>
                                                <Card.Text style={{marginTop: "10px"}}>
                                                    {(el.description !== null) ? el.description.substring(0, 50) : el.description}...
                                                </Card.Text>
                                                <Button variant="primary" value={el.id} as={NavLink} to={`${url}/single-movies-detail/${el.id}`}>Show Detail</Button>
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

export default MovieListHome