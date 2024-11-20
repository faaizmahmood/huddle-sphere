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

                    <div className='d-flex gap-3 mt-3'>
                        <button>Explore Our Spaces</button>
                        <button>Get Workspace</button>
                    </div>
                </div>

                <div className={`${styles.hero_boxes} d-flex align-items-end`}>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_1}`}>Box 1</div>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_2}`}>Box 2</div>
                </div>
            </div>
        </section>
    )
}

export default Hero