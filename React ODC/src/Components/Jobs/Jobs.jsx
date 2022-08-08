import React from "react";
import './Jobs.css'
import Orange from '../../images/circle.png'
import Experience from "../Experience/Experience";
import In from "../../images/linkedin.svg"
import Works from "../Works/Works";


const Jobs= () =>{
    return(

        <div className="jobs app__bkg">
            
                
               <Works/>

                
        <div className="exp">
                <Experience/></div>

               <div className="areyou">
                   <div className="left">
                       <span>
                           Are you looking for a challenging job to match your ambitions
                       </span>
                       <span>
                       Working at Orange gives you the opportunity to seize exciting professional opportunities within  <br/>
                        businesses and sectors, while working in an international environment. Bridges between professions allow <br/>
                        real prospects for career development: 5G, big data, cybersecurity, digital technology are all highly <br/>
                        promising areas. For example, you can contribute to developing ethical and responsible AI and its positive <br/>
                        impact on the planet. 
                       </span>
                   </div>
                   <div className="right">
                       <button className="button">Join Us</button>
                   </div>
               </div>
               <div className="j-footer">
                   <div className="j-column1">
                       <span>Job Search</span>
                       <ul style={{ listStyleType: "none" }}>
                           <li>Search for a job</li>
                           <li>Regular</li>
                           <li>Temporary</li>
                           <li>Internship</li>
                           <li>Apprenticeship</li>
                           <li>Thesis</li>
                           <li>VIE</li>
                           <li>Postdoc</li>
                           <li>Professionalisation</li>
                           <li>Create Profile</li>
                           <li>Our Recruitment Process</li>

                       </ul>
                   </div>
                   <div className="j-column2">
                       <span>#LifeAtOrange</span>
                       <ul style={{ listStyleType: "none" }}>
                           <li>24 hours with....</li>
                           <li>Challenge</li>
                           <li>Continous learning</li>
                           <li>Innovation</li>
                           <li>Onboarding</li>
                           <li>Real stories</li>
                           <li>The place to be</li>
                           <li>Woman in tech</li>
                           <li>Work-life balance</li>

                       </ul>
                   </div>
                   <div className="j-column3">
                       <span>Topics</span>
                       <ul style={{ listStyleType: "none" }}>
                           <li>5G</li>
                           <li>AI</li>
                           <li>Banking</li>
                           <li>Big Data</li>
                           <li>Cloud</li>
                           <li>Consultancy</li>
                           <li>Content</li>
                           <li>Customer care</li>
                           <li>Cybersecurity</li>
                           <li>Development</li>
                           <li>Healthcare</li>
                           <li>Network</li>
                           <li>Research</li>
                           <li>SDN</li>
                           <li>Wholesale</li>

                       </ul>
                   </div>
                   <div className="j-column4">
                       <span>Students</span>
                       <ul style={{ listStyleType: "none" }}>
                           <li>Graduate Program</li>
                           <li>Internships</li>
                           <li>PhD</li>
                           <li>Postdoc</li>
                        

                       </ul>
                       
                   </div>
                   <hr/>
               </div>
               <hr/ >
               <div className="j-lastfooter">
               
                   <div className="fs">
                       <span>© Orange 2021</span>
                       <img src={In} alt="" />

                   </div>
                   <div className="sd">
                       <span>Legal Matters</span>

                   </div>
                   <div className="th">
                       <span>Cookies</span>

                   </div>
                   <div className="fr">
                       <span>Accessibility</span>

                   </div>
                   <div className="ft">
                       <span>Personal Data</span>
                   </div>
               </div>
            
            

        </div>
    )

}

export default Jobs