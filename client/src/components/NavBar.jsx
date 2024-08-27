import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../assets/logo.png';
import { GrClose } from "react-icons/gr";

function Navbar() {
    const [menuBtn, setMenuBtn] = useState(true);
    const nav = useNavigate();

    return (
        <Fragment>
            <header>
                <div className="header">
                    <img src={logo} alt="logo" className='header_logo' onClick={() => nav('/')} />
                    <p>Christ The Living Petra</p>
                </div>

                <nav>
                    <input type="checkbox" id="check" onClick={() => setMenuBtn(!menuBtn)} />
                    <label htmlFor='check' className="overlay"></label>
                    <label htmlFor='check' className="checkbtn">
                        {
                            (menuBtn) ? <FaBarsStaggered /> : <GrClose />
                        }
                    </label>

                    <Link to={'/'}>
                        <img src={logo} alt="gd" className="logo nav_logo" />
                    </Link>

                    <ul>
                        <li>
                            <Link
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/events"
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar