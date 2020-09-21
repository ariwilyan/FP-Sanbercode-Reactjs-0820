import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Movies from '../Movies/Movies'
import MovieDetail from '../Movies/MovieDetail'
import MovieEditor from '../Movies/MovieEditor'
import MovieHome from '../Movies/MovieHome'
import SingleMovie from '../Movies/SingleMovie'
import SingleMovieLogin from '../Movies/SingleMovieLogin'

import Games from '../Games/Games'
import GameDetail from '../Games/GameDetail'
import GameEditor from '../Games/GameEditor'
import GameHome from '../Games/GameHome'
import SingleGame from '../Games/SingleGame'
import SingleGameLogin from '../Games/SingleGameLogin'

import About from '../../User/About'

const HomeRoutes  = (props) => {
    return(
        <Switch>
            <Route exact path={`${props.path}`}>
                <h2 style={{textAlign: "center", fontWeight: "bolder"}}>Gallery of Movies and Games</h2>
                <MovieHome />
                <GameHome />
            </Route>

            <Route exact path={`${props.path}/movies`}>
                <Movies />
            </Route>
            <Route exact path={`${props.path}/movies/list-movies`}>
                <MovieHome />
            </Route>
            <Route exact path={`${props.path}/movies/list-movies-editor`}>
                <Movies />
            </Route>
            <Route path={`${props.path}/movies/detail/:id`}>
                <Movies />
                <MovieDetail />
            </Route>
            <Route path={`${props.path}/single-movies-detail/:id`}>
                <SingleMovie />
            </Route>
            <Route path={`${props.path}/movies/list-movies/single-movies-detail/:id`}>
                <SingleMovieLogin />
            </Route>
            <Route exact path={`${props.path}/movies/list-movies-editor/:mode`}>
                <MovieEditor />
            </Route>
            <Route path={`${props.path}/movies/list-movies-editor/:mode/:id`}>
                <MovieEditor />
            </Route>

            <Route exact path={`${props.path}/games`}>
                <Games />
            </Route>
            <Route exact path={`${props.path}/games/list-games`}>
                <GameHome />
            </Route>
            <Route exact path={`${props.path}/games/list-games-editor`}>
                <Games />
            </Route>
            <Route path={`${props.path}/games/detail/:id`}>
                <Games />
                <p>bla</p>
                <GameDetail />
            </Route>
            <Route path={`${props.path}/single-games-detail/:id`}>
                <SingleGame />
            </Route>
            <Route path={`${props.path}/games/list-games/single-games-detail/:id`}>
                <SingleGameLogin />
            </Route>
            <Route exact path={`${props.path}/games/list-games-editor/:mode`}>
                <GameEditor />
            </Route>
            <Route path={`${props.path}/games/list-games-editor/:mode/:id`}>
                <GameEditor />
            </Route>

            <Route path={`${props.path}/about`}>
                <About />
            </Route>
        </Switch>
    )
}

export default HomeRoutes