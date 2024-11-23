import React, { useRef } from 'react';
import styles from './testimonial.module.scss';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {

    const swiperRef = useRef(null); 

    const testimonials = [
        {
            id: 1,
            quote: "“Every time I step into HuddleSphere, I feel motivated. The vibrant atmosphere is inspiring, making it the perfect place to collaborate and innovate.”",
            author: "Ali Khan",
            role: "Freelancer"
        },
        {
            id: 2,
            quote: "“HuddleSphere has transformed how I work. The facilities are top-notch, and the staff is always ready to help. I’ve built lasting professional relationships here.”",
            author: "Ayesha Siddiqui",
            role: "Entrepreneur"
        },
        {
            id: 3,
            quote: "“As a remote worker, HuddleSphere provides me with the perfect blend of focus and networking opportunities. Highly recommended!”",
            author: "Omar Sheikh",
            role: "Remote Worker"
        },
        {
            id: 4,
            quote: "“The community here is amazing! I’ve met so many talented individuals who have helped me grow professionally.”",
            author: "Fatima Ahmed",
            role: "Graphic Designer"
        },
        {
            id: 5,
            quote: "“The flexibility at HuddleSphere allows me to work on my own terms. The environment is both professional and welcoming.”",
            author: "Zain Abbas",
            role: "Software Developer"
        },
        {
            id: 6,
            quote: "“HuddleSphere offers an inspiring and productive workspace. It’s my go-to place for important meetings and brainstorming sessions.”",
            author: "Rabia Naeem",
            role: "Marketing Specialist"
        },
        {
            id: 7,
            quote: "“As a freelancer, I needed a space that supports creativity and focus. HuddleSphere exceeds my expectations every time.”",
            author: "Ahmed Raza",
            role: "Freelancer"
        },
        {
            id: 8,
            quote: "“From high-speed internet to excellent customer service, HuddleSphere has it all. It’s a perfect place for startups!”",
            author: "Sana Iqbal",
            role: "Startup Founder"
        },
        {
            id: 9,
            quote: "“I’ve been working from HuddleSphere for months now, and it’s been an incredible experience. Highly recommended!”",
            author: "Hassan Ali",
            role: "Content Writer"
        },
        {
            id: 10,
            quote: "“HuddleSphere not only provides a workspace but also an inspiring community. It has helped me grow my network tremendously.”",
            author: "Mariam Yusuf",
            role: "Business Consultant"
        }
    ];
    

    return (
        <section className={styles['testimonial-section']}>
            <h2>
                What our <span>Visitors Say</span>
            </h2>

            <div className={`hr mx-auto my-4 ${styles.hr}`}></div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                pagination={false}
                className={`${styles.testimonial_card} `}
            >

                {
                    testimonials.map((ele,ind) => {
                        return (
                            <>
                                <SwiperSlide key={ind}>
                                    <div className={`${styles.test_card_wrapper}`}>
                                        <div className={styles['quote-icon']}>
                                            <img src='./images/testmonial_icon.png' alt='Co-Remotely - co-working space'/>
                                        </div>
                                        <p className='mt-3'>
                                            {ele.quote}
                                        </p>
                                        <div className="hr mx-auto mb-3 mt-4"></div>
                                        <div className={`${styles.testimonial_meta_data}`}>
                                            <p>{ele.author}</p>
                                            <p className="mt-2">{ele.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                className={`${styles['decorative-square']} ${styles['left-square']}`}
                onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
            >
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
                className={`${styles['decorative-square']} ${styles['right-square']}`}
                onClick={() => swiperRef.current?.slideNext()} // Go to next slide
            >
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </section>
    );
};

export default Testimonial;
