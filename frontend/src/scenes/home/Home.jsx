import './home.css'
/* IMAGES IMPORT */
import category1 from '../../Images/site_assets/category-1.svg'
import category2 from '../../Images/site_assets/category-2.svg'
import category3 from '../../Images/site_assets/category-3.svg'
import category4 from '../../Images/site_assets/category-4.svg'
import shape4 from '../../Images/site_assets/about-shape-4.svg'
import heroBg from '../../Images/site_assets/Background.webp'
import videoBg from '../../Images/site_assets/video-bg.webp'
import shape2 from '../../Images/site_assets/video-shape-2.webp'
import video from '../../Images/site_assets/video.mp4'
/* ----------------------------------------------------*/
import Navbar from "../../component/navbar/Navbar"
import Category from '../../component/category/Category'
import Stat from '../../component/stats/Stat'
import Footer from '../../component/footer/Footer'
import Team from '../../component/team'
import FAQ from "../../component/faq/FAQ"
import Notice from '../../component/notice/Notice'
import Spinner from '../../component/spinner/Spinner'
import LoadingScreen from '../../component/loadingScreen/LoadingScreen'

import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'
import { Skeleton } from '@mui/material'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import AOS from "aos"
import "aos/dist/aos.css"
import { ThemeContext } from '../../context/ThemeContext'
import Banner from "../home/Banner.jpg"

const Home = () => {
  const { darkMode } = useContext(ThemeContext)
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [pageLoading, setPageLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(true)


  /** API call for all the events */
  const fetchEvents = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/event/getevents')
      setUpcomingEvents(data)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const fetchPastEvents = async () => {
    try {
      setPageLoading(true)
      const { data } = await axios.get('/event/getpastevents')
      setPastEvents(data)
    } catch (error) {
      throw error
    } finally {
      setPageLoading(false)
    }
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()

    fetchEvents()
    fetchPastEvents()
  }, [])


  const progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll = `${totalScroll / windowHeight}`
    const progressBar = document.getElementById('progressBar')
    progressBar.style.transform = `scale(${scroll},1)`
    progressBar.style.opacity = `${scroll}`
  }
  window.addEventListener('scroll', progressBarHandler)


  const backtopRef = useRef()
  window.addEventListener('scroll', () => {
    if (backtopRef.current !== null) {
      if (window.scrollY > 400) {
        backtopRef.current?.classList.add("active")
      } else {
        backtopRef.current?.classList.remove("active")
      }
    }
  })

  const { ref: playRef, inView, entry } = useInView({ threshold: 0.6 })
  if (entry !== undefined) {
    entry.target.muted = true
    inView ? entry.target.play() : entry.target.pause()
  }

  console.log(iframeLoading)

  return (
    pageLoading ? <LoadingScreen />
      : <>
        <Helmet>
          <title>Resourcio Community</title>
        </Helmet>

        <Navbar />

        <main>
          <article>
            <div id="progressBarContainer" >
              <div id="progressBar" ></div>
            </div>

            <section className="section hero has-bg-image" aria-label="home"
              style={{ "backgroundImage": `url(${heroBg})`, filter: darkMode ? "invert(1)" : "invert(0)" }}>
              <div className="container">
                <div className="hero-content" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" style={{ filter: darkMode ? "invert(0.99)" : "invert(0)" }}>
                  <h1 className="h1 section-title">
                    The  Platform for CareExperienced  to <span className="span" data-aos="zoom-in"
                      data-aos-delay="200" style={{color:"blue"}}>Connect</span> for other Care Experienced people.
                  </h1>
                  <p className="hero-text">
                  Welcome to <strong style={{color:"blue",fontSize:"30px"}}>Dream</strong><strong style={{fontSize:"30px",color:"black"}}>Sync</strong>, a hub created for care-experienced individuals! Join us in this one-stop destination where you can connect, meet, greet, and empower others while being empowered yourself.
                  </p>

                  <Link to='/resources' className='link btn has-before'>
                    <span>Find Resources</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </Link>

                </div>

                {/* <div className="hero-banner">
                  <div className="noticeboard" data-aos="flip-right" data-aos-duration="1000"
                    style={{
                      alignItems: upcomingEvents.length === 0 ? 'center' : '',
                      justifyContent: upcomingEvents.length === 0 ? 'center' : '',
                    }}
                  >
                    {loading ? <Spinner width='20px' height='20px' /> : upcomingEvents.length > 0 ?
                      upcomingEvents.map((event) => (
                        <Notice
                          key={event._id}
                          notice={event.event}
                          link={event.link}
                        />
                      )) :
                      !loading && <span className='noevents'>No events to show</span>
                    }
                    {upcomingEvents.length > 0 && <marquee behaviour='scroll' scrollamount='4'>Upcoming events</marquee>}
                  </div>
                </div> */}
                <div>
                  <img style={{width:"80%",justifyContent:"right"}} src={Banner} walt="" />
                </div>
              </div>
            </section>


            <section className="section category" aria-label="category">
              <div className="container">
         
                <h2 className="h2 section-title">
                  What <span className="span" data-aos="zoom-in" style={{color:"blue"}}>DreamSync</span> Do.
                </h2>
                <p className="section-text">
                  Here are the different resouces:
                </p>
                <ul className="grid-list cate" data-aos="flip-right" data-aos-duration="1000">
                  <li>
                    <Category
                      image={category1}
                      cardTitle="Document Assistence"
                      cardText="We offer invaluable assistance to care-experienced individuals by facilitating the acquisition of essential government documents, ensuring accessibility and comprehensive support throughout the process"                   style="170, 75%, 41%"
                    />
                  </li>

                  <li>
                    <Category
                      image={category2}
                      cardTitle="Development Resources"
                      cardText="Connecting care-experienced individuals with vital resources closes gaps and empowers through skill-building support"
                      style="351, 83%, 61%"
                    />
                  </li>

                  <li>
                    <Category
                      image={category3}
                      cardTitle="Community Unity"
                      cardText="Creating a Unified Platform for Care-Experienced Individuals to Connect and Access Resources"
                      style="229, 75%, 58%"
                    />
                  </li>

                  <li>
                    <Category
                      image={category4}
                      cardTitle="Mutual Empowerment"
                      cardText="Mutual Support, Self-Empowerment. Joining Forces to Lift Each Other and Ourselves Towards Growth and Success"
                      style="42, 94%, 55%"
                    />
                  </li>
                </ul>
              </div>
            </section>


            <section className="section about" id='about' aria-label="about">
              <div className="container">
                <div className="about-content">
                  <p className="section-subtitle" style={{ "color": "var(--gray-web)" }}>About Us</p>
                  <h3 className="h2 section-title" data-aos="fade-right" data-aos-duration="400">
                    A group of enthusiastic <span className="span" data-aos="zoom-in" data-aos-delay="300" color='blue'>Care Experienced  People </span>  keen to help
                    their fellow Care Expeirnced people.
                  </h3>
                  <p className="section-text" style={{ "color": "var(--gray-web)" }}>
                  Through <strong style={{"color":"blue"}}>Dream</strong><strong style={{"color":"black"}}>Sync</strong>, we aim to collaborate with care-experienced individuals, focusing on documentation and building a robust community for Care-Experienced Youth. Our goal is to provide opportunities and create a centralized platform for their needs.
                  </p>
                  <ul className="about-list" style={{ "fontSize": "1.5rem" }}>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in">Document Assistence</span>
                    </li>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in" data-aos-delay="200">Connect to Other care Experienced</span>
                    </li>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span" data-aos="zoom-in" data-aos-delay="400">All in a single platform</span>
                    </li>
                  </ul>
                  <img src={shape4} width={100} height={100} loading="lazy" alt="background shape"
                    className="shape about-shape-4" />
                </div>

                <div className="past-videos">
                  <span>Past workshops</span>
                  <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 130,
                      modifier: 2.2
                    }}
                    navigation={{
                      prevEl: '.prev',
                      nextEl: '.next',
                      clickable: true
                    }}
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    className='swiper-container'
                  >
                    {pastEvents.map((event) => (
                      <SwiperSlide key={event?._id}>
                        {
                          <iframe
                            className='iframe'
                            src={event?.eventLink}
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
                            loading='lazy' allowFullScreen
                            onLoad={() => setIframeLoading(false)}
                          />
                        }
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className='navigation-btns'>
                    <div className='navigation-btn prev'>
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='navigation-btn next'>
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="video has-bg-image" aria-label="video" style={{ "backgroundImage": `url(${videoBg})` }}>
              <div className="container">
                <div className="video-card">
                  <div className="video-banner img-holder">
                    <video ref={playRef} width={850} loop>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <img src={shape2} width={158} height={174} loading="lazy" className="shape video-shape-2"
                    alt="background shape" />
                </div>
              </div>
            </section>


            <section className="section stats" aria-label="stats">
              <div className="container">
                <ul className="grid-list statistics">
                  <li>
                    <Stat
                      cardTitle={2}
                      cardText="Working Locations"
                      style="170, 75%, 41%"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle={100}
                      cardText="Helping to create Documents"
                      style="351, 83%, 61%"
                      fontSize="35"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle={6}
                      cardText="Sessions on well being and personal growth"
                      style="260, 100%, 67%"
                      fontSize="35"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle={30}
                      cardText="Members connected"
                      style="42, 94%, 55%"
                      fontSize="35"
                    />
                  </li>
                </ul>
              </div>
            </section>

            <Team />
            <FAQ />

          </article>
        </main>

        <Footer />

        <a href="#" className="back-top-btn" aria-label="back top top" ref={backtopRef}>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>


        <style>
          {`
            .swiper-slide {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              backdrop-filter: blur(2.5px);
            }
            .swiper-slide-shadow-left {
              display: none;
            }
            .swiper-slide-shadow-right {
              display: none;
            }
            .swiper-pagination-bullets {
              display: none;
            }
          `}
        </style>
      </>
  )
}


export default Home