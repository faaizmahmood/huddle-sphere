import React from 'react'
import styles from './space.module.scss'

const Space = () => {
    return (
        <section className={`${styles.space} py-5`}>

            <div className='container'>
                <h2 className='text-center text-white'>Meet Our <span>Hub Space</span></h2>

                <div className={`${styles.space_wrapper} mt-5 mb-sm-4`}>

                    {/* plant image */}
                    <div className={`${styles.plant_image} d-xl-block d-none`}>
                        <img src='./images/plant_img.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                    </div>
                    {/* plant image */}

                    <div className='row flex-column-reverse flex-lg-row g-0'>

                        <div className='col-lg-5 bg-white px-4 py-5'>
                            <h3 className='text-black'>Open Hall Workspace</h3>
                            <div className='hr'></div>
                            <p className='mt-4'>Our Open Hall Workspace is designed for professionals who thrive in a collaborative and energetic environment.</p>

                            <h4 className='text-black'>Availability</h4>

                            <p className='mt-2'>3 Tables Available</p>
                            <p className='mt-2'>Per Seat: PKR 12,000/month</p>

                            <h4 className='text-black'>Perfect for</h4>

                            <p>Freelancers, Startups, Remote employees,
                                Teams for brainstorming sessions</p>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                        <div className='col-lg-7'>
                            <img src='./images/space_image.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                        </div>

                    </div>

                    {/* plant image */}
                    <div className={`${styles.bowl_image} d-xl-block d-none`}>
                        <img src='./images/bowl_img.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                    </div>
                    {/* plant image */}
                </div>
            </div>

        </section>
    )
}

export default Space