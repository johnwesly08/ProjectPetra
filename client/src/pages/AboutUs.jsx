import React, { Fragment } from 'react'

export default function AboutUs() {
    return (
        <Fragment>
            <section className='about_page page'>
                <h1 className='title'>About Us</h1>
                <div className="who_we_are about_component">
                    <div className="content">
                        <h1 className='title'>Who we are</h1>
                        <p className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque quod culpa provident minus magni dolores soluta perspiciatis, nisi ad quo in odio, nostrum cum, blanditiis necessitatibus veniam architecto asperiores.
                        </p>
                    </div>
                    <div className="img_container">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9a/72/48/csi-st-thomas-church.jpg?w=1200&h=-1&s=1" alt="church" className="img" />
                    </div>
                </div>
                <div className="our_vision about_component">
                    <div className="img_container">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9a/72/48/csi-st-thomas-church.jpg?w=1200&h=-1&s=1" alt="church" className="img" />
                    </div>
                    <div className="content">
                        <h1 className='title'>Our vision</h1>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis explicabo illo deserunt odio blanditiis architecto voluptatibus eligendi aliquam in beatae ullam velit quod, neque debitis nulla iure vel. Tempora.</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
