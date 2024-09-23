import React, { Fragment } from 'react'

export default function Events() {
    return (
        <Fragment>
            <section className="events_page page">
                <div className="main">
                    <div className="left">
                        <h1 className='title'>OUR LATEST SERMON</h1>
                        <div className="ytlink">
                            <iframe src="https://www.youtube.com/embed/YMArmiSrobA?si=RQrd0MqIHUB56tZM" title={"YouTube video player"}></iframe>
                        </div>
                    </div>
                    <div className="right">
                        <p className="sermonContent">
                        Join us as we delve into this week’s sermon. Drawing from scripture and real-life applications, this sermon offers inspiring insights and spiritual guidance to help you navigate your daily walk with God. Whether you were present for the service or want to revisit the message, you can watch or listen to the full sermon here. Be encouraged, uplifted, and strengthened in your faith!
                        </p>
                        <h1 className='ytchannel'>To catch us live on <a href="https://www.youtube.com/@IntoHisLikeness">Youtube</a></h1>
                    </div>
                </div>
                <div className="weekEvents">
                    <h1 className='title'>OUR WEEK SCHEDULE</h1>
                    <div className="events">
                        <div className="sunday event">
                            <h1>Every Sunday</h1>
                            <p>Timing: 10:00</p>
                        </div>
                        <div className="womens event">
                            <h1>Women's Fellowship</h1>
                            <p>Timing: 11:00</p>

                        </div>
                        <div className="youth event">
                            <h1>Youth Meeting</h1>
                            <p>Timing: 12.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}