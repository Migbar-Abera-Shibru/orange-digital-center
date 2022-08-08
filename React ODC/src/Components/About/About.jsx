import React from "react";
import Snippet from "../Snippet/Snippet";
import './About.css'
// import Girl from '../../images/girl.jpg'
import s9 from '../../images/9.png'
import s10 from '../../images/10.png'
import s17 from '../../images/17.png'
import German from "../../images/german.png";

const About = () =>{
    return(
        <div className="about">
            
                
            
            <div className="imggil app__bg">
               <div className="ab"> <span>About</span></div>
                <span>Orange Digital Centers serve as support and development centres for everyone to gain <br/>
                digital and entrepreneurial skills. From coding training to small business coaching, they cover <br/>
                a wide range of activities. Free and open to all, the facilities promote learning based<br/> 
                on concrete projects</span>
                
                {/* <img src={Girl} alt="" /> */}
            </div>
            <Snippet/>
            <div className="grayneger app__bg">
                <div className="spanyalew">
                    <span>
                        The sustainable Development Goals
                    </span>
                    
                    <div className="eski">
                    <button className="button">Find out more</button>
                    </div>
                    
                </div>
                <div className="ind9">
                    <img src={s9} alt="" />
                </div>
                <div className="red10">
                      <img src={s10} alt="" />
                </div>
                <div className="par17">
                      <img src={s17} alt="" />
                </div>
               
            </div>
            <div className="a-footer ">
                <div className="yeme">
                    <span>2022 © Orange Digital Center</span>
                </div>
                <div className="hule">
                    <span>Terms & Conditions</span>
                </div>
                <div className="sos">
                    <img src={German} alt="" />
                </div>

            </div>
            
        </div>
    )

}

export default About