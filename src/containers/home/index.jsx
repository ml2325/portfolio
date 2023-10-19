import React from "react";
import  './styles.scss';
import {Animate} from 'react-simple-animate';
import {FaFacebook,FaLinkedin,FaTwitter,FaGithub} from 'react-icons/fa'

const Home =()=>{
    return(
       <section className="home" id="home">
        <div className="home__text-wrapper">
            <h1>Hello,I'm Melissa Lahlou
            <br />
            Front End Developer.
            </h1>
        </div>
        <Animate
         play
         duration={1.5}
         delay={1}
         start={{
            transform:'translateY(600px)'
         }}
         end={{
            transform:'translateX(0px)'
         }}
        >
        <div className="contact-me">
            <div className="contact-me__button-wrapper">
                <button>Hire me</button>
                <a href="">Download resume </a>
            </div>
            <div className="contact-me__socials-wrapper">
                <FaFacebook size={32}/>
                <FaLinkedin size={32}/>
                <FaTwitter size={32}/>
                <FaGithub  size={32}/>
            </div>
        </div>
        </Animate>
       
       </section>
    )
};
export default Home;
