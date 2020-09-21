import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { DataContext } from '../../Context/DataContext'
import { UserContext } from '../../Context/UserContext'
import MovieListHome from './MovieListHome'

const MovieHome = () => {
    const [api, user, , isLogin] = useContext(UserContext)
    const [movies, setMovies] = useContext(DataContext)

    useEffect(() => {
        if(movies === null){
            Axios.get(`${api}/data-movie`)
                .then(res => {
                    setMovies(res.data)
                }).catch(err => {
                    alert(err)
                })
        }
    })

    return(
        <>
            <MovieListHome movies={movies} />
        </>
    )
}

export default MovieHome