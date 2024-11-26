import React from 'react'
import styles from './hero.module.scss'
import Navbar from './navbar/navbar'

const Hero = () => {

    const heroBG = {
        backgroundImage: 'url(./images/hero_bg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }


    const phoneNumber = "+923001290077";
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
        <section className={`${styles.hero}`} style={heroBG}>

            <div className={`d-md-none d-block ${styles.side_icon}`}>

                <div className={`${styles.side_icon_item}`} onClick={handleClick}>
                    <img src='./icon/whatsapp.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                </div>
                {/* <div className={`${styles.side_icon_item} mt-3`}>
                <img src='./icon/whatsapp.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />
                </div> */}
            </div>

            <div className='container position-relative h-100'>

                <Navbar />

                <div className={`${styles.hero_content} mt-5`}>
                    <h1 className='pt-4'><span>Work, Collaborate</span>, Thrive - All in One Place.</h1>
                    <h6 className='text-white'>At CoRemotly, we offer flexible, inspiring spaces designed to fuel your creativity and productivity.</h6>

                    <div className='d-sm-flex gap-3 mt-3'>
                        <button>Explore Our Spaces</button>
                        <button className='mt-sm-0 mt-3'>Get Workspace</button>
                    </div>
                </div>

                <div className={`${styles.hero_boxes} d-md-flex d-none align-items-end`}>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_1}`}>
                        <div onClick={handleClick} style={{cursor:'pointer'}}>
                            <img src='./icon/whatsapp.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />

                            <h6 className='mt-3'>+92 300 1085680</h6>

                            <p>Round-the-clock</p>
                        </div>
                    </div>
                    <div className={`${styles.hero_box} ${styles.hero_boxes_2}`}>
                        <div>
                            <img src='./icon/location.png' alt='Co-Remotely - Co-Working Space' className='img-fluid' />

                            <h6 className='mt-4'>66-A  Central Park main ferozpur Road Lahore</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero