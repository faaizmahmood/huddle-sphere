import React from 'react'
import styles from './upcommingClasses.module.scss'

const UpcommingClasses = () => {
    return (
        <section className={`${styles.upcommingClasses}`}>
            <h2 className='text-dark'>Upcoming <span>classes</span></h2>
            <div className={`${styles.hr} mt-3`}></div>
            <p className='text-center w-75 mt-4'>Explore our diverse range of workshops and classes designed to enhance your skills, boost your creativity, and foster networking opportunities. Whether you're looking to learn a new skill, improve your business acumen, or simply connect with like-minded individuals, there’s something for everyone!</p>
            <button className='mt-5'>More events</button>
        </section>
    )
}

export default UpcommingClasses