import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { DataContext } from '../../Context/DataContext'
import { UserContext } from '../../Context/UserContext'
import GameList from './GameList'
import GameTable from './GameTable'

const Games = () => {
    const [api, user, , isLogin] = useContext(UserContext)
    const [ , , games, setGames] = useContext(DataContext)

    useEffect(() => {
        if(games === null){
            Axios.get(`${api}/data-game`)
                .then(res => {
                    setGames(res.data)
                }).catch(err => {
                    alert(err)
                })
        }
    })

    return(
        <>
        {
            isLogin === true ? (
                <>
                    <Row>
                        <Col>   
                            <h3>Form List Games Editor</h3>
                        </Col>
                    </Row>
                    <hr />
                    <GameTable />
                </>
            ) : (
                <>
                    <Row>
                        <Col>   
                            <h3>List Games</h3>
                        </Col>
                    </Row>
                    <hr />
                    <GameList games={games} />
                </>
            )
        }
        </>
    )
}

export default Games