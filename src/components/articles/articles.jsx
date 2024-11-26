import React from 'react'
import styles from './articles.module.scss'


// const PostCard = ({ img }) => {
//     return (
//         <>

//         </>
//     )
// }

const Articles = () => {

    const posts = [
        {
            img: "./images/post_img_1.png",
            date: "January 12, 2019",
            comments: 15,
            postTitle: "What Makes a Great Co-Working Space? Tell Us Your Must-Haves!",
        },
        {
            img: "./images/post_img_2.png",
            date: "January 12, 2019",
            comments: 8,
            postTitle: "Freelancers vs. Remote Teams: Who Benefits More from Co-Working Spaces?",
        },
        {
            img: "./images/post_img_3.png",
            date: "January 12, 2019",
            comments: 23,
            postTitle: "What Amenities Do You Wish Every Co-Working Space Had?",
        },
    ];


    return (
        <section className={`${styles.articles} my-5`}>

            <div className={`${styles.articles_content}`}>
                <h2 className='text-black mt-lg-4 mt-0'><span>Recent </span>articles</h2>
                <div className={`${styles.hr} mt-3`}></div>
           </div>

            <div className='container mt-sm-5 mt-4'>

                <div className='row g-2'>

                    {
                        posts?.map((ele, ind) => {
                            return (
                                <>
                                    <div className={`col-lg-4 col-sm-6 p-2 mt-lg-0 mt-4`} key={ind}>
                                        <div className={`${styles.post_item}`}>
                                            <img src={ele?.img} alt='Co-Remotely - Co-Working Space' />

                                            <div className={`${styles.post_body} mt-3`}>
                                                <div className={`${styles.post_metadata} d-flex gap-3`}>
                                                    <p>{ele?.date}</p>
                                                    <p>{ele?.comments} comments</p>
                                                </div>

                                                <h6 className='text-black mt-3'>{ele?.postTitle.slice(0, 45)}{ele?.postTitle.length >= 44 ? "..." : ""}</h6>

                                                <div className={`${styles.divider} my-2`}></div>

                                                <p className={`${styles.read_more_btn} mt-3`}>Read more</p>
                                            </div>
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

export default Articles