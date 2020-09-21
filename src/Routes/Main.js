import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

import { UserProvider } from '../Context/UserContext'
import Routes from './Routes'

// Layout Component
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Main = () => {
    return(
        <UserProvider>
            <Router>
                <Header />
                <br />
                <Routes />
                <br />
                <Footer />
            </Router>
        </UserProvider>
    )
}

export default Main