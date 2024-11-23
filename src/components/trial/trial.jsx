import React from 'react'
import styles from './trail.module.scss'

const Trial = () => {

    const trailBG = {
        backgroundImage: 'url(./images/trial_bg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }


    return (
        <section className={`${styles.trial} py-5`} style={trailBG}>
            <div className='container'>
                <div className='row'>

                    <div className='col-6'></div>

                    <div className='col-6'>
                        <h2 className='text-dark'>We provide a free day to experience <span>our benefits</span></h2>
                        <div className='hr mt-3'></div>
                        <p className='mt-4'>At HuddleSphere, we understand that choosing the right coworking space is an important decision. To help you make that choice, we offer a complimentary day for you to explore our facilities and discover everything we have to offer.</p>

<div className={`${styles.signature} d-flex gap-3 align-items-center mt-4`}>

<div>
    <h6>Lasley Cutwood</h6>
    <p>Hub Owner</p>
</div>

<img src='./images/sign.png'  alt='Huddle Sphere - Co-Working Space'/>

</div>

                        <div className={`${styles.btn_group} mt-5`}>
                            <button>Get free day</button>
                            <button>Read more</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Trial