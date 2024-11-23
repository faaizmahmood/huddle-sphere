import React from 'react'
import styles from './hero.module.scss'
import Navbar from './navbar/navbar'

const Hero = () => {

    const heroBG = {
        backgroundImage: 'url(./images/hero_bg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section className={`${styles.hero}`} style={heroBG}>
            <div className='container position-relative h-100'>
                <Navbar />

                <div className={`${styles.hero_content} mt-5`}>
                    <h1><span>Work, Collaborate</span>, Thrive – All in One Place.</h1>
                    <p>At HuddleSphere, we offer flexible, inspiring spaces designed to fuel your creativity and productivity.</p>

                    <div className='d-sm-flex gap-3 mt-3'>
                        <button>Explore Our Spaces</button>
                        <button className='mt-sm-0 mt-3'>Get Workspace</button>
                    </div>
                </div>

                <div className={`${styles.hero_boxes} d-md-flex d-none align-items-end`}>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_1}`}>
                        <div>
                            <img src='./icon/whatsapp.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />

                            <h6 className='mt-3'>+92 300 1085680</h6>

                            <p>Round-the-clock</p>
                        </div>
                    </div>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_2}`}>
                        <div>
                            <img src='./icon/location.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />

                            <h6 className='mt-4'>66-A  Central Park main ferozpur Road Lahore</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero