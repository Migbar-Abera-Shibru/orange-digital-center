import React from "react";
import './Contact.css'
import Van from '../../images/van.jpeg'
import emm from '../../images/emm.jpeg';
import nic from '../../images/nic.jpeg';
import ric from '../../images/ric.jpg';
import syl from '../../images/syl.jpeg';
import Tom from '../../images/tom.jpg';
import em from '../../images/em.jpg';
import flo from '../../images/flo.jpg';
import lbt from '../../images/lbt.jpg';
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Mail from "@iconscout/react-unicons/icons/uil-fast-mail-alt";


const Contact = () =>{
    return(
        <div className="contact app__bg" >
            <div className="spanpart">
               <div className="yemej"><span>Contact Us</span></div> 
                <div className="hul"><span> Do you have questions?</span></div>
                <div className="sos"><span>Feel free to contact us directly or you can contact one of us form the list below</span></div>
            </div>
            <div className="teklalaw">
            <div className="c-left">
                <h1>Paris</h1>
                <div className="syl">
                    
                    <img src={syl} alt="" /><br/>
                    <span>Sylvain Bruno</span><br/>
                    <Mail color="white" size={"3rem"} />
                    </div>
                <div className="tom">
                    <img src={Tom} alt="" /><br/>
                    <span>Tom Wright</span><br/>
                    <Mail color="white" size={"3rem"} />
                    </div>
               <div className="car">
                    
                    <img src={ric} alt="" /><br/>
                    <span>Caroline Cellier</span><br/>
                    <Mail color="white" size={"3rem"} />
                    </div>
                <div className="em">
                    <img src={em} alt="" /><br/>
                    <span>Emmanuel Gauthier</span><br/>
                    <Mail color="white" size={"3rem"} />
                    </div>
                <div className="lbi">
                    <img src={lbt} alt="" /><br/>
                    <span>lbtissame Naffie</span><br/>
                    <Mail color="white" size={"3rem"} />
                    </div>

            </div>
            <div className="c-right">
                <h1>London</h1>
                <div className="van">

                    <img src={Van} alt="" /><br/>
                    <span>Vanessa Clarke</span><br/>
                    <span>+44(0)7818848848</span><br/>
                    <Mail color="white" size={"3rem"} />
                </div>
                <div className="nic">
                    <img src={nic} alt="" /><br/>
                    <span>Nicole Clarke</span><br/>
                    <span>+44(0)7811128457</span><br/>
                    <Mail color="white" size={"3rem"} />
                </div>
                <div className="emm">
                    <img src={emm} alt="" /><br/>
                    <span>Emma Goodwin</span><br/>
                    <span>+44(0)7746515781</span><br/>
                    <Mail color="white" size={"3rem"} />

                </div>


            </div>
            </div>
            <div className="contactus">
                <span>Contact Us Directly</span>
                <form action="">
                <input type="text" name="user_name" className="user" placeholder="Name" />
                        <input type="email" name="user-email" className="user" placeholder="Email" />
                        <textarea  name="message" className="user" placeholder="Message" />
                        <input type="submit" name="user_name" value="Send" className="button"/>
                </form>

            
            </div>
            <div className="c-footer">
                <div className="c-yewtegnaw">
                    <span>Follow us on Social media</span>
                    <div className="social">
                    <Instagram color="white" size={"3rem"}/>
                    <Facebook color="white" size={"3rem"} />
                    <Twitter color="white" size={"3rem"} />
                    <Github color="white" size={"3rem"} />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Contact