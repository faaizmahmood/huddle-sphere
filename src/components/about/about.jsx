"use client";

import React, { useEffect, useState } from 'react'
import styles from './about.module.scss'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import { PropagateLoader } from 'react-spinners';

const About = () => {

    const [loading, setLoading] = useState(true)


    const startLoader = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }


    return (
        <section className={`${styles.about} my-5`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 text-center'>
                        <img src='./images/about.png' alt='Co-Remotly - Co-Working Space' className='img-fluid' />
                    </div>
                    <div className='col-lg-6 mt-lg-0 mt-5'>
                        <h2>Space for Freelancers and <span>Creative People</span></h2>
                        <div className='hr'></div>
                        <p className='mt-3'>At Co-Remotly, we provide an inspiring and flexible environment tailored for freelancers and creative individuals. Our coworking space is designed to foster creativity, collaboration, and productivity, making it the perfect place for you to thrive.</p>

                        <div className={`${styles.about_btn_group} d-flex gap-3 mt-4`}>
                            <button>Read more</button>
                            {/* <button>watch video</button> */}
                            {/* <Popup trigger={<button onClick={startLoader}>watch video</button>} modal >
                                <div className={`${styles.video_model} d-flex justify-content-center align-items-center`} style={{ height: '80vh', width: '100%', borderRadius: '20px' }}>
                                    {
                                        loading ? (
                                            <>
                                                <PropagateLoader color="#FF6A19" />
                                            </>
                                        ) : (
                                            <>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/IxRVa1DbSAg"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </>
                                        )
                                    }
                                </div>
                            </Popup> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About