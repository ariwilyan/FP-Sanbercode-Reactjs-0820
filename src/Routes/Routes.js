import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import { UserContext } from '../Context/UserContext'

// User Component
import Login from '../User/Login'
import Register from '../User/Register'
import EditPassword from '../User/ChangePassword'
import ProfileAccount from '../User/ProfileAccount'

const Routes = () => {
    const [, , , isLogin] = useContext(UserContext)
    return(
        <>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/login'>
                    {
                        isLogin === false ? (
                            <Login />
                        ) : (
                            <Redirect to='/' />
                        )
                    }
                </Route>
                <Route path='/register'>
                {
                    isLogin === false ? (
                        <Register />
                    ) : (
                        <Redirect to='/' />
                    )
                }
                </Route>
                <Route path='/editpassword'>
                {
                    isLogin === true ? (
                        <EditPassword />
                    ) : (
                        <Redirect to='/' />
                    )
                }
                </Route>
                <Route path='/profileaccount'>
                {
                    isLogin === true ? (
                        <ProfileAccount />
                    ) : (
                        <Redirect to='/' />
                    )
                }
                </Route>
            </Switch>
        </>
    )
}

export default Routes