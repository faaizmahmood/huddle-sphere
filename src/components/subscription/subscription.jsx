import React from 'react'
import styles from './subscription.module.scss'

const Subscription = () => {
    return (
        <section className={`${styles.subscription} py-5`}>
            <div className='container d-flex flex-column align-items-center'>

                <h2 className='text-white text-center'>Coworking <span>Subscriptions</span></h2>
                <p className='text-white text-center w-75 mt-3'>Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum molestie. Lorem augue tortor, consequat eu diam a, varius pulvinar ipsum. Mauris eu interdum molestie.</p>

                <div className='row g-3 w-100 mt-3'>

                    <div className='col-3'>
                        <div className={`${styles.subscription_card}`}>
                            <h6>1 Time Visit</h6>
                            <h2>$12 <span>/day</span></h2>
                            <p>Vivamus posuere, mauris eu interdum molestie. Lorem augue tortor.</p>

                            <h6>Any free table</h6>
                            <h6>Free WiFi</h6>
                            <h6>Kitchen & Bar</h6>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.subscription_card}`}>
                            <h6>Lounge</h6>
                            <h2>$76 <span>/mon</span></h2>
                            <p>Vivamus posuere, mauris eu interdum molestie. Lorem augue tortor.</p>

                            <h6>Lounge zone</h6>
                            <h6>Free WiFi</h6>
                            <h6>Kitchen & Bar</h6>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.subscription_card} ${styles.highlight_card}`}>
                            <h6>Smart Office</h6>
                            <h2>$129 <span>/mon</span></h2>
                            <p>Vivamus posuere, mauris eu interdum molestie. Lorem augue tortor.</p>

                            <h6>Personal workplace</h6>
                            <h6>Conference hall</h6>
                            <h6>All services</h6>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.subscription_card}`}>
                            <h6>Full Space</h6>
                            <h2>$240 <span>/day</span></h2>
                            <p>Vivamus posuere, mauris eu interdum molestie. Lorem augue tortor.</p>

                            <h6>Personal room</h6>
                            <h6>PC and equipment</h6>
                            <h6>All area access</h6>

                            <button className='mt-4'>Get Workspace</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Subscription