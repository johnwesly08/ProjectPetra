import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import Events from '../pages/Events'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Routing() {
    return (
        <Fragment>
            <Router>
                <Header />
                <NavBar />
                <Routes>
                    <Route path='/' element={<DashboardPage />} index />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
                <Footer />
            </Router>
        </Fragment>
    )
}
