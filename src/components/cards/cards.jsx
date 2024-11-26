import React from 'react'
import styles from './cards.module.scss'
import wifi from '../../../public/icon/wifi.png'
import ups from '../../../public/icon/UPS.png'
import tea from '../../../public/icon/Tea.png'
import parking from '../../../public/icon/Parking.png'
import access from '../../../public/icon/24-7-Access.png'
import equipments from '../../../public/icon/Equipment.png'
import meeting from '../../../public/icon/Meeting.png'

const CardItem = ({ icon, title, description }) => {
    return (
        <>
            <div className={`col-lg-3 col-sm-6 col-12`}>
                <div className={`${styles.cards_box} ${styles.card_item} `}>
                    <img src={`./icon/${icon}.png`} alt='Co-Remotely - Co-Working Space ' />
                    <h5>{title}</h5>
                    <p className='text-center'>{description}</p>
                </div>
            </div>
        </>
    )
}

const Cards = () => {
    return (
        <section className={`${styles.cards} py-5 mt-5`}>
            <div className='container'>
                <div className={`${styles.cards_items} row g-3`}>

                    <div className={`col-lg-3`}>
                        <div className={`${styles.cards_content} ${styles.card_item} text-lg-start text-center`}>
                            <h2 className='text-black'>We care about <span>visitors</span></h2>
                            <div className='hr mb-2 mx-lg-0 mx-auto '></div>
                            <p>Your experience matters to us; we're dedicated to providing a welcoming and supportive environment.</p>
                        </div>
                    </div>

                    <CardItem icon={"wifi"} title={"High Speed Internet"} description={"Seamless, fast internet to keep you connected and productive."} />
                    <CardItem icon={"UPS"} title={"UPS Power Backup "} description={"Easy access to print and scan stations for all your document needs."} />
                    <CardItem icon={"Tea"} title={"Tea/ Green Tea"} description={"Grab coffee, tea, and snacks in our stocked kitchen to keep you fueled."} />
                    <CardItem icon={"Parking"} title={"Car Parking"} description={"Convenient, secure parking spaces available to make commuting easy and stress-free."} />
                    <CardItem icon={"24-7-Access"} title={"24/7 Access"} description={"Round-the-clock access so you can work on your own schedule."} />
                    <CardItem icon={"Equipment"} title={"Office Equipment"} description={"Ergonomic chairs, adjustable desks, and essential tools for your comfort and productivity."} />
                    <CardItem icon={"Meeting"} title={"Meeting Room"} description={"Book equipped conference rooms with top-notch AV for presentations and meetings."} />

                </div>
            </div>
        </section>
    )
}

export default Cards