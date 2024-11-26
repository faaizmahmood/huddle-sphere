import React from 'react'
import styles from './upcommingClasses.module.scss'

const UpcommingClasses = () => {

    const cardData = [
        {
            title: "Freelancers",
            description: "A quiet and inspiring space to focus on projects and connect with professionals."
        },
        {
            title: "Startups",
            description: "Collaborative workspace to brainstorm ideas and grow your business."
        },
        {
            title: "Remote Employees",
            description: "Stay productive with a professional setup and high-speed internet."
        },
        {
            title: "Team Sessions",
            description: "Ideal for team meetings, brainstorming, and strategic planning."
        },
    ]

    return (
        <section className={`${styles.upcommingClasses} mt-5 text-center`}>
            <h2 className='text-black mt-lg-5 mt-0'><span>Who Do We </span>Provide Space For?</h2>
            <div className={`${styles.hr} mt-3`}></div>
            <p className='text-center mt-4'>we provide workspace solutions for a variety of professionals and teams. Whether you're a freelancer, a startup, a remote employee, or a team looking for a collaborative environment, we’ve got the perfect space to meet your needs.</p>
            {/* <button className='mt-5'>More events</button> */}

            <div className='container d-md-flex justify-content-center mt-lg-5 mt-4 p-0'>

                <div className='row w-100'>

                    {
                        cardData.map((ele, ind) => {
                            return (
                                <>
                                    <div className={`col-lg-3 col-sm-6 p-1`} key={ind}>
                                        <div className={`${styles.card_item} text-center`}>
                                            <h4 className='text-black'>{ele?.title}</h4>
                                            <p>{ele?.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default UpcommingClasses