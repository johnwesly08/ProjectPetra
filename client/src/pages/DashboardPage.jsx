import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

export default function DashboardPage() {
  return (
    <Fragment>
      <section className='dashboard_page page'>
        <div className="dashboard_component">
          <h1>Church Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis facilis incidunt, commodi ratione, harum doloremque ducimus quibusdam pariatur enim repellendus repellat adipisci blanditiis sed? Placeat adipisci et rem vero modi.</p>
        </div>

        <div className="dashboard_component">
          <h1>Events</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur a mollitia recusandae in asperiores ducimus unde quo voluptates, obcaecati enim rem iste delectus magni sint consequatur nihil expedita quam dolorum.</p>
          <Link to={'/events'}>Events</Link>
        </div>
      </section>
    </Fragment>
  )
}
