import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {

    
    const phoneNumber = "+923001085680";
    const message = "Hello, I would like to learn more about your services!";

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);

        // Detect if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const whatsappUrl = isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` // Mobile URL
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; // Desktop URL

        // Redirect to the appropriate URL
        window.open(whatsappUrl, "_blank");
    };

    return (
        <header className={`${styles.header} py-3`}>
            <div className='row align-items-end'>
                <div className='col-sm-6 mt-3'>
                    <a href='/'><img src='./images/logo.png' /></a>
                </div>
                <div className='col-sm-6 d-sm-block d-none'>
                    <nav className={`${styles.nav} d-flex justify-content-end align-items-center gap-4`}>
                        <button onClick={handleClick}>+92 300 1085680</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar