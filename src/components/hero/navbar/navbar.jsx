import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <header className={`${styles.header} py-3`}>
            <div className='row'>
                <div className='col-sm-6 mt-3'>
                    <a href='/'><img src='./images/logo.png' /></a>
                </div>
                <div className='col-sm-6 d-sm-block d-none'>
                    <nav className={`${styles.nav} d-flex justify-content-end align-items-center gap-4`}>
                        <a href='tel:+92 300 1290077'><button>+92 300 1290077</button></a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar