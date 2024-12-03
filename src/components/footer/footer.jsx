import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <section className={`${styles.footer}`}>

            <div className='container'>

                <div className='row'>

                    <div className='col-lg-8'>
                        <img className={`${styles.logo}`} src='./images/logo.png' alt='Co-Remotely - Co-Working Space' />

                        <p className='text-white mt-3 w-75'>We provide workspace solutions for a variety of professionals and teams. Whether you're a freelancer, a startup, a remote employee, or a team looking for a collaborative environment, we’ve got the perfect space to meet your needs.</p>

                        <div className={`${styles.social_icon} d-flex gap-2 mt-3`}>

                            <img src='./icon/facebook.png' alt='Co-Remotely - Co-Working Space In Lahore' />
                            <img src='./icon/instagram.png' alt='Co-Remotely - Co-Working Space In Lahore' />

                        </div>
                    </div>
                    {/* <div className={`${styles.subscribe} col-lg-4 mt-lg-0 mt-5`}>
                        <div className={`${styles.subscribe_content}`}>
                            <div className='w-100 text-center'>
                                <h4 className='text-black'>Subscribe for <span>Members</span></h4>

                                <div className={`${styles.input_item}`}>
                                    <input type='text' placeholder='Your email...'/>
                                </div>

                                <button className='mt-3'>Subscribe</button>
                            </div>
                        </div>
                    </div> */}
                    <div className={` col-lg-4 mt-lg-0 mt-5`}>
                        <div className='d-flex align-items-center gap-3'>

                            <img src='./icon/whatsapp.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                            <h6 className=''>+92 300 1085680</h6>

                        </div>
                        <div className='d-flex align-items-start gap-3 mt-4'>

                            <img src='./icon/location.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                            <h6 className=''>66-A  Central Park main ferozpur Road Lahore</h6>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer