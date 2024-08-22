import React, { Fragment } from 'react'

export default function Events() {
    return (
        <Fragment>
            <section className="Events">
                <section className="latest_stream">
                    <h4 className='ytchannel'>To catch us live on<a href="https://www.youtube.com/@IntoHisLikeness">&nbsp;Youtube</a></h4>
                    <h4>OUR LATEST SERMON</h4>
                    <div className="ytlink">
                        <iframe
                            width={1500}
                            height={315}
                            src="http://www.youtube.com/embed/watch?v=YhaTsYAjX8k"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="background">
                        </div>
                        <p className="sermonContent">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem! Error, corrupti ad quisquam aperiam odio perspiciatis aliquam quas nisi expedita sequi corporis ipsam pariatur id dolor fuga sint at amet repudiandae sunt, nesciunt hic. Doloribus, eos ex saepe reiciendis suscipit exercitationem nemo eum quisquam blanditiis ipsa veniam at officia.
                        </p>
                    </div>
                </section>
                <section className='calenderEvents'>
                    <div className="weekEvents">
                        <h3>OUR WEEK SCHEDULE</h3>
                        <h4>
                        </h4>
                        <ul>
                            <li>
                                <div className="sunday">
                                    <h4>Every Sunday</h4>
                                    <p>Timing: 10:00</p>
                                </div>
                            </li>
                            <li>
                                <div className="womens">
                                    <h4>Women's Fellowship</h4>
                                    <p>Timing: </p>

                                </div>
                            </li>
                            <li>
                                <div className="youth">
                                    <h4>
                                        Youth Meeting
                                    </h4>
                                    <p>Timing: 10.30</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </section>
            </section>
        </Fragment>
    )
}