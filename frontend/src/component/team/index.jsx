
import vishwajeet from "../../Images/team/Vishwajeet.png"

import chaitanya from "../../Images/team/Chaitanya.jpeg"
import Shahid from "../../Images/team/Shahid.png"
import Anand from "../../Images/team/Anand.jpeg"
import suraj from "../../Images/team/Suraj.jpeg"
import ContactCard from "../contactCard/ContactCard"
import blogBg from "../../Images/site_assets/blog-bg.svg"
import "aos/dist/aos.css"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import Ayush from "../../Images/team/Ayush.jpeg"


const Team = () => {
  const { darkMode } = useContext(ThemeContext)
  const sliderSettings = {
    className: 'center',
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <ArrowCircleLeftIcon sx={{zIndex: 100}} />,
    nextArrow: <ArrowCircleRightIcon />
  }


  return (
    <section
      className="section blog has-bg-image"
      id="team"
      aria-label="contact"
      style={{
        backgroundImage: `url(${blogBg})`,
        filter: darkMode ? "invert(1)" : "invert(0)",
      }}
    >
      <div
        className="container"
        style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
      >
        <p className="section-subtitle" style={{ color: "var(--gray-web)" }}>
          Team
        </p>
        <h2 className="h2 section-title" data-aos="fade-right">
          Get in touch with us
        </h2>
        <Slider {...sliderSettings}>
         
          <div className="dev_card">
            <ContactCard
              image={Anand}
              name="Anand Biniya"
              role="Founder"
              linkedIn="https://www.linkedin.com/in/anandbin/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={vishwajeet}
              name="Vishwajeeth"
              role="CTO "
              linkedIn="https://www.linkedin.com/in/vishwajeetsrk/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={chaitanya}
              name="Chaitanya Khaleja"
              role="Social Media Handler & Researcher"
              linkedIn="https://www.linkedin.com/in/chaitanya-kaleja-975502255/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={Ayush}
              name="Ayush Bajpai"
              role="Board Memeber"
              linkedIn="https://www.linkedin.com/in/ayush-bajpai25/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={Shahid}
              name="Shahid Mallik"
              role="Incharge of Kashmir"
              linkedIn="https://www.linkedin.com"
            />
          </div>
        
        
        
          <div className="dev_card">
            <ContactCard
              image={suraj}
              name="Suraj Kumar"
              role="Accountant "
              linkedIn="https://www.linkedin.com/in/suraj-kumar-38b7b527a/"
            />
          </div>
          {/* Add the rest of the team members here */}
        </Slider>
      </div>
    </section>
  )
}

export default Team
