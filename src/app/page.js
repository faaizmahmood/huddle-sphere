"use client"

import Hero from '@/components/hero/hero';
import styles from './page.module.scss'
import Testimonial from '@/components/testimonial/testimonial';
import Gallery from '@/components/gallery/gallery';
import About from '@/components/about/about';
import { useEffect, useState } from 'react';
// import { PropagateLoader } from 'react-spinners';
import Cards from '@/components/cards/cards';
import Space from '@/components/space/space';
import UpcommingClasses from '@/components/upcommingClasses/upcommingClasses';
import Subscription from '@/components/subscription/subscription';
import Trial from '@/components/trial/trial';
import ConferenceHall from '@/components/conferenceHall/conferenceHall';
import Articles from '@/components/articles/articles';
import Footer from '@/components/footer/footer';

export default function Home() {

  const [loading, setLoading] = useState(true)



  useEffect(() => {
    // Simulate the loading completion when the page fully renders
    const handleLoad = () => setLoading(false);

    // Wait for the DOM and Next.js hydration to finish
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);


  return (
    <>
      <main className={`${styles.mian}`}>
        {
          loading ? (
            <>
              <section className={` d-flex flex-column justify-content-center align-items-center loading`} style={{ height: '100vh', backgroundColor: '#000' }}>
                <img src='./images/logo.png' alt='Co-Remotly - Co Working Space' className='mb-4' />
                {/* <PropagateLoader color="#FF6A19" /> */}
                <h4 className='text-white'>Laoding...</h4>
              </section>
            </>
          ) : (
            <>
              <Hero />
              <About />
              <Cards />
              <Space />
              <UpcommingClasses />
              {/* <Subscription/> */}
              {/* <Trial/> */}
              {/* <ConferenceHall/> */}
              <Gallery />
              <Testimonial />
              <Articles />
              <Footer />
            </>
          )
        }
      </main>
    </>
  );
}
