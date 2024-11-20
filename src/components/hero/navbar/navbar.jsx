import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <header className={`${styles.header} py-3`}>
            <div className='row'>
                <div className='col-6 mt-3'>
                    <a href='/'><img src='./images/logo.png' /></a>
                </div>
                <div className='col-6'>
                    <nav className={`${styles.nav} d-flex justify-content-end align-items-center gap-4`}>
                        <p className='mt-3'>Home</p>
                        <p className='mt-3'>About Us</p>
                        <button>+92 300 1290077</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar