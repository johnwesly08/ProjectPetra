import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Fragment>
            <div className="navbar">
                <nav>
                    <ul className="navList">
                        <Link to='/dashboard'><li>Dashboard</li></Link>
                        <Link to='/events'><li>Events</li></Link>
                        <Link to='/about'><li>About us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
