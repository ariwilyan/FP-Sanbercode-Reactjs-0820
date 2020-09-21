import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { DataContext } from '../../Context/DataContext'
import { UserContext } from '../../Context/UserContext'
import GameListHome from './GameListHome'

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
            <GameListHome games={games} />
        </>
    )
}

export default Games