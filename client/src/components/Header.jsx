import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'


export default function Header() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/dashboard'>
                <section className='logo'>
                  <img src={logo} alt="Church_logo" className='logo_img' />
                </section>
              </Link>
            </li>
            <li><span>Welcome!</span></li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}
