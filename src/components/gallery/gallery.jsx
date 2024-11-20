import React from 'react'

const Gallery = () => {
    return (
        <section className={`my-5`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src='./images/huddle_sphere_gallery_img_1.png' className='img-fluid'/>
                    </div>
                    <div className='col-3'>
                        <img src='./images/huddle_sphere_gallery_img_2.png' className='img-fluid'/>
                    </div>
                    <div className='col-3'>
                        <img src='./images/huddle_sphere_gallery_img_3.png' className='img-fluid'/>
                    </div>
                    <div className='col-3'>
                        <img src='./images/huddle_sphere_gallery_img_4.png' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery