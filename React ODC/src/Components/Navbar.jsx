import React from 'react';
import './Navbar.css'
import {Link} from 'react-scroll'
import Orange from './../images/orange.png'
import Toggle from './Toggle/Toggle';

const Navbar = () => {
    return(

        <div className="n-wrapper">
            <div className="n-left">
                
                <div className="n-name">
                    <div className="imgsth"><img src={Orange} alt="" width="70px" height="65px"/></div>
                    {/* <div className="spansth">Orange </div> */}
                </div>
                {/* <span>Orange</span> */}
                <Toggle/>
                    <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                       <a href='/'> <li>Home</li> </a>
                       
                       <a href='/jobs'> <li>Jobs</li></a>
                       <a href='/contact'><li>Contact</li></a>
                       <a href='/about'><li>About</li></a>
                    </ul>
                    </div>
            </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <a href="/login"> <li>Login</li></a> 
                     <a href="/register"> <li>Signup</li></a> 
            
                </ul> 
             </div>
        </div>
        
        </div>
    )
}
export default Navbar