import React from "react";
import "../style/LandingPage.css";
import star from '../assets/svg/star.svg';
import bulb from '../assets/svg/bulb.svg';
import image from '../assets/svg/image.svg';
import imageOverlay from '../assets/svg/imageOverlay.svg';
import svg1 from '../assets/svg/svg1.svg';
import star2 from '../assets/svg/star2.svg';
import bulb2 from '../assets/svg/bulb2.svg';
import star3 from '../assets/svg/star3.svg';
import string from '../assets/svg/string.svg';
import text from '../assets/svg/text.svg';
import text2 from '../assets/svg/text2.svg'
import star4 from '../assets/svg/star4.svg';
const LandingPage = () => {
  return (
    <div className="mainContainer">
        <nav className="topNav">
            <h2 className="header"><span>get</span><span className="linked">Linked</span></h2>
            <a href="">TimeLine</a>
            <a href="">Overview</a>
            <a href="">FaQs</a>
            <a href="">Contact</a>
            <button className="register">Register</button>
        </nav>
        <hr className="divider" /> 
        <div className="middleContainer">
            <h2 className="header2">Igniting a Revolution in HR Innovation</h2>
            <div>
            <img src={star} alt="" className="star" />
            <img src={star2} alt="" className="star2"/>
            </div>
            
            <div className="imageContainer">
                <div className="text">
                    <img src={bulb} alt="" className="bulb"/>
                    <p>
                    Participate in getlinked tech Hackathon 2023 stand 
                    <br /><span> a chance to win a Big prize</span>
                    </p>
                    <button className="regis">Register</button>
                    <img src={svg1} alt="" className="svg1" />
                </div>
                <div className="imageContainer">
                    
                    <img src={image} alt="" className="image" />
                </div>
                <div className="imageOverlay">
                    <img src={imageOverlay} alt="" className="overlayImage" />
                </div>
            </div>
        </div>
        <hr className="divider1" /> 
        <div className="container2">
            <div>
                <img src={star3} alt="" className="star3"/>
                <img src={bulb2} alt="" className="bulb2"/>
                <img src={string} alt="" className="string"/>
            </div>

            <div>
                <img src={text} alt="" className="text1"/> <br />
                <img src={text2} alt="" className="text2"/>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;
