import React, { Fragment } from 'react'

export default function Events() {
    return (
        <Fragment>
            <section className="Events">
                <section className="latest_stream">
                    <h4>To catch us live on <a href="">Youtube</a></h4>
                    <div className="ytlink">
                        <h4>Our Latest Sermon</h4>
                    </div>
                </section>
                <section className='calenderEvents'>
                    <p>This is the Calender Section refering the events</p>
                    <div className="weekEvents">
                        <ul>
                            <li>
                                <div className="sunday">
                                    <h4>Every Sunday</h4>
                                    <p>Timing: </p>
                                </div>
                            </li>
                            <li>
                                <div className="event1">
                                    event 1
                                    <p>Timing: </p>

                                </div>
                            </li>
                            <li>
                                <div className="event2">
                                    event2
                                    <p>Timing: </p>

                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

            </section>


        </Fragment>
    )
}


// This section is related to the Sermon Videos from Youtube, and sermon as BLogs(Written docs)

{/* <section className='youtube_section'>
                <p>This is the recent Youtube videos</p>
            </section> */}
{/* <section className="sermon_section">
                <p>This is the recent sermon section (like blogs..) </p>
            </section> */}