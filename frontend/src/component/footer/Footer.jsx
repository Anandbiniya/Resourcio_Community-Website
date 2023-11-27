import footerBg from '../../Images/site_assets/footer-bg.webp'
import communityLogo from '../../Images/site_assets/DreamSync.jpeg'
import whatsapp from '../../Images/site_assets/WhatsApp.svg'
import gmail from '../../Images/site_assets/gmail.svg'
import './footer.css'

//import x LOGO

import x from '../../Images/site_assets/X-white.svg';


const Footer = () => {
    return (
        <footer className="footer" id="footer" style={{ "backgroundImage": `url(${footerBg})` }}>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand" >
                        <div >
                            <img src={communityLogo}
                                width={320}
                                height={120}
                                style={{ marginLeft: '-52px'}}
                                alt="community logo"
                            />
                            <p className="footer-brand-text" >
                                Thank You for visiting our website. <br />
                                Wishing you a very happy day ahead.
                            </p>
                            <div className="wrapper" >
                                <ul className="social-list" >
                                    <li>
                                        <a href="https://www.facebook.com/groups/605404708473694/" target="_blank" className="social-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/dreamsync-a-care-experienced-community-41601a2a0/" target="_blank" className="social-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/dream_sync_hub?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank" className="social-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/ADreamsync" target="_blank" className="social-link">
                                            <img className='X-logo' src={x} />
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className='flexlinks'>
                            <p>
                                Feel free to leave a message <br />
                                if you have any questions.
                            </p>
                            <br />

                            <div className="wrapper">
                                <img src={whatsapp} height={45} width={45} alt="whatsapp" />
                                <a href="https://whatsapp.com/channel/0029VaFRiHbKrWR0L22onC0f" target="_blank" className="footer-link">
                                    WhatsApp
                                </a>
                            </div>
                            <div className="wrapper" >
                                <img src={gmail} className='wrapper-1' height={30} width={30} alt="gmail" />
                                <a href="mailto:dreamsyncanand@gmail.com" target="_blank" className="footer-link">
                                    dreamsyncanand@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} All Rights Reserved <span className="copyright-link">DreamSync</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
