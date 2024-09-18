import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <Fragment>
      <section className='dashboard_page page'>
        <div className="dashboard_component">
          <h1 className="title main">Christ the Living Petra Church</h1>
          <p className='pmain'>“….and on this rock I will build My church, and the gates of Hades shall not prevail against it.” Matthew 16:18</p>
        </div>

        <div className="dashboard_component">
          <h1 className="title">Events</h1>
          <p>"Stay updated on our upcoming services and gatherings by visiting our Events page."</p>
          <Link to={'/events'}>
            <button className="btn">Happenings</button>
          </Link>
        </div>

        <div className="dashboard_component">
          <h1 className="title">About Us</h1>
          <p>"To learn more about our mission, values, and community, visit our About Us page."</p>
          <Link to={'/about'}>
            <button className="btn">Learn More</button>
          </Link>
        </div>

        <div className="dashboard_component">
          <h1 className="title">Contact Us</h1>
          <p>"For prayer requests, support, or to connect with us, please visit our Contact Us page."</p>
          <Link to={'/contact'}>
            <button className="btn">Get in Touch</button>
          </Link>
        </div>
      </section>
    </Fragment>
  )
}
