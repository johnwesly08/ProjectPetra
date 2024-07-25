import React, { Fragment } from 'react'

export default function Events() {
  return (
    <Fragment>
        <section className="latest_stream">
            <p>This is the latest stream and latest sermon</p>
        </section>
        <section className='calenderEvents'>
            <p>This is the Calender Section refering the events</p>
        </section>
        <section className='youtube_section'>
            <p>This is the recent Youtube videos</p>
        </section>
        <section className="sermon_section">
            <p>This is the recent sermon section (like blogs..) </p>
        </section>
    </Fragment>
  )
}
