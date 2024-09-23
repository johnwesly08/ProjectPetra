import React, { Fragment } from 'react'

export default function AboutUs() {
    return (
        <Fragment>
            <section className='about_page page'>
                <h1 className='maintitle'>About Us</h1>
                <div className="who_we_are about_component">
                    <div className="content">
                        <h1 className='title'>Who we are</h1>
                        <p className="desc">
                        This is the foundation verse for Christ the Living Petra Church. “Petra” is a Greek word meaning “Rock”. This church is built upon Jesus Christ who is the Living Rock and the gates of hell shall not prevail against it, Amen!
                        <br /><br />What a stable, immovable and firm foundation!
                        <br /><br />Christ the Living Petra Church is non-denominational. A simple and straightforward church following the Word of God and not man-made doctrines or theories. We believe in a triune God (God the Father, Christ the Son and the Holy Spirit). 

                        </p>
                    </div>
                    <div className="img_container">
                        <img src="./Church.jpg" alt="church" className="img" />
                    </div>
                </div>
                <div className="our_vision about_component">
                    <div className="img_container">
                        <img src="./Church.jpg" alt="church" className="img" />
                    </div>
                    <div className="content">
                        <h1 className='title'>Our vision</h1>
                        <p className="desc">At the Heart of Christ the Living Petra Church is
<br /> <strong>~</strong> To gather the scattered sheep of Christ
<br /> <strong>~</strong> To consume the Word of God together
<br /> <strong>~</strong> To become spiritually healthy, sound and strong
<br /> <strong>~</strong> To be the bride of Christ who is expectantly waiting for the rapture
<br /> <strong>~</strong> To know God, love God and walk with Him everyday
<br /> <strong>~</strong> To unlearn the patterns of the world and learn the ways of God’s Kingdom
<br /> <strong>~</strong> To establish the Kingdom of God on earth
<br /> <strong>~</strong> To support God’s purpose and calling in the life of believers
<br /> <strong>~</strong> To create servant-leaders serving God and His Kingdom
<br /> <strong>~</strong> To imitate Christ and to love one another
</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
