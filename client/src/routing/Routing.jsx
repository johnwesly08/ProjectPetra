import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import Events from '../pages/Events'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Routing() {
    return (
        <Fragment>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<DashboardPage />} index />
                    <Route path='/events' element={<Events />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
                <Footer />
            </Router>
        </Fragment>
    )
}
