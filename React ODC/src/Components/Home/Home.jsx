import React from "react";
import LaughihgGirl from '../../images/laughing woman.jpg';
import VideoPlayer from "react-video-js-player";
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import Boy from '../../images/boy.png'
import Thumbup from '../../images/thumbup.png'
import Glassesimoji from '../../images/glassesimoji.png'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Crown from '../../images/crown.png'
import './Home.css';
import { motion } from 'framer-motion';
import Floating from "../Floating/Floating";
import Card from "../Card/Card";
import Resume from './Migbar Abera  Shibru.docx'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import SimpleImageSlider from "react-simple-image-slider";
import {Carousel} from 'react-carousel-minimal'
import { useContext } from "react";
import { themeContext } from "../../Context";



const Home = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const data = [
        {
          image: "https://www.orange.com/sites/orangecom/files/styles/crop_21_9/public/2020-11/OrangeDigitalCenter_21-5_0.jpg",
          caption: "ODC"
        },
        {
          image: "https://www.orange.com/sites/orangecom/files/styles/crop_21_9/public/2020-09/Orange-jobs-21-5.jpg",
          caption: "ODC"
        },
        
       
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    const transition = {duration: 2 , type:'spring'}
    return(
        <div className="home">
          <div className="h-singleLine">
                <span style={{color: darkMode? 'white' : ''}}>Orange Digital Center: commited to digital equality</span>
            </div>
            <Carousel
            data={data}
            time={2000}
            width="200rem"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            // slideImageFit="cover"
            // thumbnails={true}
            thumbnailWidth="100px"
            style={{
            //   textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />












            
            
            {/* <div className="h-laughingimg">
                <img src={LaughihgGirl} alt="" />
            </div> */}
            <div className="h-tgicon">
                <span style={{color: darkMode? 'white' : ''}}>Orange Digital Center: commited to digital equality</span>
                <span style={{color: darkMode? 'white' : ''}}>Orange has put digital equality at the heart of its Engage 2025 strategy. Consistent with our purpose, “as a trusted partner,<br/>
                 Orange gives everyone the keys to a responsible digital world”, and our commitment to the UN Sustainable Development <br/>
                 Goals, the Group committed to open an Orange Digital Center in all of our operating countries by 2025.<br/>
                 Orange Digital Centers are dedicated to delivering digital innovation and training to all. This network of free  and inclusive
                  resources supports local start-ups and projects using digital technology.</span>
            </div>
            <div className="h-lehuletmikefelew app__bkg1">
                <div className="h-left">
                <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Boy} alt="" />
                    <motion.img 
                        initial={{left: '-36%'}}
                        whileInView={{left: '-24%'}}
                        transition={transition}
                        src={Glassesimoji} alt="" />

                    <motion.div
                    initial={{top:'-4%', left:"74%"}}
                    whileInView={{left: '68%'}}
                    transition={transition}
                    style={{top: "-4%", left: '68%'}} 
                    className="floating-div"
                    >
                        <Floating image={Crown} txt1='Fab ' txt2='Lab'/>
                    </motion.div>

                    <motion.div 
                    initial={{top:'18rem', left:"9rem"}}
                    whileInView={{left: '0%'}}
                    transition={transition}
                    style={{top:'18rem', left:'0rem'}}
                    className="floating-div"
                    >

                        <Floating image={Thumbup} txt1='Internship' txt2= 'opportunities' />
                    </motion.div>
                    
                </div>
                <div className="h-right">
                <span style={{color: darkMode? 'white' : ''}}>Making ditigal an opportunity for everyone</span>
                    <span style={{color: darkMode? 'white' : ''}}>Orange Digital Centers serve as support and development centres for
                          everyone to gain digital and entrepreneurial skills. From coding training to
                          small business coaching, they cover a wide range of activities. Free and
                          open to all, the facilities promote learning based on concrete projects. <br/>
                          Training courses in digital technology are available for students, job seekers
                          and young people with or without qualifications.</span>
                </div>
            </div>
            <div className="listcountries">
                <div className="h-left2">
                <span style={{color: darkMode? 'white' : ''}}>
                    11 centers <br/>
                    have already opened in Middle East<br/> Africa and <br/>
                    soon... in Europe in 2022.
                </span>
                <a href={Resume} download > <button className="button s-button"> Download</button></a>
                </div>
                <div className="h-right2">
                <motion.div 
                whileInView={{left:'14rem'}}
                initial={{left:'25rem'}}
                transition={transition}

                // style={{ left: '14rem' }} 
                >
                    <Card
                     emoji = {HeartEmoji}
                    heading ={'Countries'}
                    detail = {"Cameroon, Ethiopia , Madagascar, Senegal"}
                    />
                </motion.div>
                <motion.div 
                whileInView={{left:'-4rem'}}
                initial={{left:'-11rem', top:'12rem'}}
                transition={transition}
                // style={{ top:"12rem", left: "-4rem" }}
                 >
                    <Card
                    emoji = {Glasses}
                    heading ={'Countries'}
                    detail = {"Côte d'Ivoire, Jordan, Mali, Tunisia"}
                    />
                </motion.div>
                <motion.div 
                whileInView={{left:'12rem'}}
                initial={{left:'25rem', top:'19rem'}}
                transition={transition}
                // style={{ top: "19rem", left: "12rem" }} 
                >
                    <Card
                    emoji = {Humble}
                    heading ={'Countries'}
                    detail = {"Egypt, Kinshasa, Morocco"}
                    color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                
                </div>
            </div>
            <div className="footer app__bkg1">
                <div className="ionsthing">
                    <span>Follow us </span>
                <Insta color="white" size={"3rem"} />
                <Facebook color="white" size={"3rem"} />
                <Gitub color="white" size={"3rem"} />
                <Twitter color="white" size={"3rem"} />
                {/* <Tiktok color="white" size={"3rem"} /> */}
                <hr/>
                </div>
                <div className="yekerew">
                    <div className="Column">
                        <span>About Orange</span>
                        <ul>
                            <li>Integrated Annual Report</li>
                            <li>Universal registration document</li>
                            <li>Latest Financial results</li>
                            <li>Africa and the Middle East
                            </li>
                            <li>All news</li>
                            <li>Calender</li>
                            <li>Networks Documentation</li>
                            <li>Podcasts</li>
                            <li>CSR Media Library</li>
                            <li>Investors' Library</li>
                        </ul>
                    </div>
                    <div className="Column">
                        <span>other links</span>
                    
                    <ul>
                        <li>All Group's Websites</li>
                        <li>Job Search</li>
                        <li>Orange News_</li>
                        <li>Radio Waves</li>
                        <li>Orange Cberdefense</li>
                        <li>Start-up</li>
                        <li>Orange Business Services</li>
                    </ul>
                    </div>
                    <div className="Column">
                        <span>Choose your Country/Region</span>
                        <span>THird row</span>
                    </div>

                </div>


            </div>
        </div>

    )


}
export default Home