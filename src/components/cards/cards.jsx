import React from 'react'
import styles from './cards.module.scss'

const CardItem = ({title, description}) => {
    return (
        <>
            <div className={`${styles.cards_box} ${styles.card_item}`}>
                <h5>{title}</h5>
                <p className='text-center'>{description}</p>
            </div>
        </>
    )
}

const Cards = () => {
    return (
        <section className={`${styles.cards} py-5 mt-5`}>
            <div className='container'>
                <div className={`${styles.cards_items}`}>

                    <div className={`${styles.cards_content} ${styles.card_item} col-3`}>
                        <h2>We care about <span>visitors</span></h2>
                        <p>Your experience matters to us; we're dedicated to providing a welcoming and supportive environment.</p>
                    </div>

                    <CardItem title={"Free 5G WiFi"} description={"Seamless, fast internet to keep you connected and productive."}/>
                    <CardItem title={"Printing & Scanning "} description={"Easy access to print and scan stations for all your document needs."}/>
                    <CardItem title={"Kitchen & Bar"} description={"Grab coffee, tea, and snacks in our stocked kitchen to keep you fueled."}/>
                    <CardItem title={"Car Parking"} description={"Convenient, secure parking spaces available to make commuting easy and stress-free."}/>
                    <CardItem title={"24/7 Access"} description={"Round-the-clock access so you can work on your own schedule."}/>
                    <CardItem title={"Office Equipment"} description={"Ergonomic chairs, adjustable desks, and essential tools for your comfort and productivity."}/>
                    <CardItem title={"Conference Hall"} description={"Book equipped conference rooms with top-notch AV for presentations and meetings."}/>

                </div>
            </div>
        </section>
    )
}

export default Cards