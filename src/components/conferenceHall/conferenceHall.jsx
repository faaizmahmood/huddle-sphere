import React from 'react'
import styles from './conferenceHall.module.scss'

const ConferenceHall = () => {
    return (
        <section className={`${styles.conference_hall} mt-5`}>

            <div className='container'>

                <div className='row'>

                    <div className='col-6'>
                        <h2>Rent fully equipped <span>conference hall</span></h2>
                        <p className='mt-4'>We Provide a Free Day to Experience Our Benefits** <br/> 
                        *“Enjoy a complimentary day at HuddleSphere to explore our amenities, connect with our community, and see how our space can elevate your work experience. Book your free day today!”*</p>

                        <h6 className='text-center mt-2'>$18<span>/hour</span></h6>

                        <button>Read more</button>
                    </div>
                    <div className='col-6'>
                        <img src='./images/conference_hall.png' className='img-fluid'/>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ConferenceHall