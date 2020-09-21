import React, { useContext, useEffect, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom';
import { DataContext } from '../../Context/DataContext';

function minuteToHours(num){
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return ( rhours === 0 ? "" : rhours + " Hours") + (rminutes === 0 ? "" : " " + rminutes + " Minutes")
}

const SingleMovie = () => {
    let {id} = useParams()
    const [show, setShow] = useState(true);
    const [movie, setMovie] = useState(null)
    const [movies, setMovies] = useContext(DataContext)

    const handleChooseItem = () => {
        let choice = movies.filter(item => {
            return item.id === parseInt(id)
        })
        let temp = choice.map(item => {
            return item
        })
        return temp 
    }

    const redirecting = () => {
        window.location.href = '/home'
    }

    useEffect(() => {
        if(movie === null){
            if(movies === null){   
                redirecting()
            }
            let item = handleChooseItem()
            setMovie(item)
        }
        
    }, [movies, handleChooseItem])
    
    return(
        <>
            {
                movie === null ? (
                    <>
                        {
                            <Row className="form-group">
                                <Col>
                                    <h2>Tidak ada Film</h2>
                                </Col>
                            </Row>
                        }
                    </>
                ) : (
                    <>
                        {
                            movie.map((item) => {
                                return(
                                    <>
                                        <h3>Details about Movie</h3>
                                        <Row className="form-group" key={item.id}>
                                            <Col>
                                                <Card border="primary" style={{}}>
                                                    <Card.Img variant="top" src={item.image_url} style={{height: "500px", objectFit: "cover"}}/>
                                                    <Card.Body>
                                                        <Card.Title>Title: {item.title}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">Release year: {item.year}</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>Genre: {item.genre}</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>Duration: {item.duration} Minutes or ({minuteToHours(item.duration)})</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>Rating: {item.rating}</Card.Subtitle>
                                                        <Card.Text style={{marginTop: "10px"}}>Description: {item.description}</Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button as={NavLink} to={"/"} variant="primary">Back to home</Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })
                        }
                    </>
                )
            }
        </>
    )
}

export default SingleMovie