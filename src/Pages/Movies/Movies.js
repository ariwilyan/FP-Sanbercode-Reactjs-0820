import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { DataContext } from '../../Context/DataContext'
import { UserContext } from '../../Context/UserContext'
import MovieList from './MovieList'
import MovieTable from './MovieTable'

const Movies = () => {
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
        {
            isLogin === true ? (
                <>
                    <Row>
                        <Col>   
                            <h3>Form List Movies Editor</h3>
                        </Col>
                    </Row>
                    <hr />
                    <MovieTable />
                </>
            ) : (
                <>
                    <Row>
                        <Col>   
                            <h3>List Movies</h3>
                        </Col>
                    </Row>
                    <hr />
                    <MovieList movies={movies} />
                </>
            )
        }
        </>
    )
}

export default Movies