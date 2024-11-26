import React from 'react'
import styles from './gallery.module.scss'

const Gallery = () => {
    return (
        <section className={`my-5 ${styles.gallery}`}>

            <div className='container pt-lg-5 pt-0'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6 mt-md-0 mt-3'>
                        <img src='./images/huddle_sphere_gallery_img_1.png' className='img-fluid'/>
                    </div>
                    <div className='col-md-3 col-sm-6 mt-md-0 mt-3'>
                        <img src='./images/huddle_sphere_gallery_img_2.png' className='img-fluid'/>
                    </div>
                    <div className='col-md-3 col-sm-6 mt-md-0 mt-3'>
                        <img src='./images/huddle_sphere_gallery_img_3.png' className='img-fluid'/>
                    </div>
                    <div className='col-md-3 col-sm-6 mt-md-0 mt-3'>
                        <img src='./images/huddle_sphere_gallery_img_4.png' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery