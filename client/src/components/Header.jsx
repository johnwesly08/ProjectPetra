import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li><Link to='/dashboard'><img src="#" alt="Church_logo" /></Link></li>
            <li><span>Greetings!</span></li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}
