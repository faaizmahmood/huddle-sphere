import React from 'react'
import styles from './space.module.scss'

const Space = () => {
    return (
        <section className={`${styles.space} py-5`}>

            <div className='container'>
                <h2 className='text-center'>Meet our <span>hub space</span></h2>

                <div className={`${styles.space_wrapper} mt-3`}>
                    <div className='row g-0'>

                        <div className='col-4 bg-white px-4 py-5'>
                            <h3>Open space</h3>
                            <div className='hr'></div>
                            <p className='mt-4'>Discover a vibrant environment designed for collaboration, creativity, and community.</p>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                        <div className='col-8'>
                            <img src='./images/space_image.png' alt='Huddle Sphere - Co-Working Space' className='img-fluid'/>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Space