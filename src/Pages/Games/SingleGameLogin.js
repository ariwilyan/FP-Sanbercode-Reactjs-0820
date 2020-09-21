import React, { useContext, useEffect, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom';
import { DataContext } from '../../Context/DataContext';

const SingleGameLogin = () => {
    let {id} = useParams()
    const [show, setShow] = useState(true);
    const [game, setGame] = useState(null)
    const [movies, setMovies, games, setGames] = useContext(DataContext)

    const handleChooseItem = () => {
        let choice = games.filter(item => {
            return item.id === parseInt(id)
        })
        let temp = choice.map(item => {
            return item
        })
        return temp 
    }

    const redirecting = () => {
        window.location.href = '/home/games/list-games'
    }

    useEffect(() => {
        if(game === null){
            if(games === null){   
                redirecting()
            }
            let item = handleChooseItem()
            setGame(item)
        }
        
    }, [games, handleChooseItem])
    
    return(
        <>
            {
                game === null ? (
                    <>
                        {
                            <Row className="form-group">
                                <Col>
                                    <h2>Tidak ada Game</h2>
                                </Col>
                            </Row>
                        }
                    </>
                ) : (
                    <>
                        {
                            game.map((item) => {
                                return(
                                    <>
                                        <h3>Details about Game</h3>
                                        <Row className="form-group" key={item.id}>
                                            <Col>
                                                <Card border="primary" style={{}}>
                                                    <Card.Img variant="top" src={item.image_url} style={{height: "500px", objectFit: "cover"}}/>
                                                    <Card.Body>
                                                        <Card.Title>Title: {item.name}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">Release year: {item.release}</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>Genre: {item.genre}</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>Platform: {item.platform}</Card.Subtitle>
                                                        <Card.Subtitle style={{marginTop: "5px"}}>
                                                            Mode Allowed : {item.singlePlayer > 0 ? ('SinglePlayer') : ('none')} {item.multiplayer > 0 ? ('and Multiplayer'):('')}
                                                        </Card.Subtitle>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button as={NavLink} to={"../"} variant="primary">Back to list games</Button>
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

export default SingleGameLogin