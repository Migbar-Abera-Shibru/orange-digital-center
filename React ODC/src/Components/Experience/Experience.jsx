import React from "react";
import "./Experience.css";
const Experience = () => {
 
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">91%</div>
        <span  >of our employees are proud </span>
        <span>to work for Orange</span>
      </div>
      <div className="achievement">
        <div className="circle" >87%</div>
        <span  >recomended Orange as a  </span>
        <span>good place to work</span>
      </div>
      <div className="achievement">
        <div className="circle" >4,21/5</div>
        <span  >is the candidate experience <br/>
         </span>
        <span>in France, in the category of companies<br/>
        with over 1,000 emploees</span>
      </div>
      
    </div>
  );
};

export default Experience;
