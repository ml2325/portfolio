import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa';
import { personalData } from "./utils";
import  './styles.scss';
import {Animate} from 'react-simple-animate';


const About =()=>{
    return(
       <section className="about" id="about">
        <PageHeaderContent headerText="About me" icon={<BsInfoCircleFill size={40}/>}/>

        <div className="about__content">
            <div className="about__content__personalWrapper">
                <Animate play duration={1} delay={0} start={{
                    transform:'translateX(-800px)'
                }}
                end={{
                    transform:'translateX(0px)'
                }}>
                <h3 className="developerContent">Front End developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere, id ad doloribus natus voluptate voluptatem? Pariatur voluptates sapiente quisquam illum, eveniet possimus quidem ab, iure excepturi laborum fugit fuga? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut eaque ad quia, excepturi nemo neque minima dolore consequuntur commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quidem libero quibusdam nisi id minima eveniet quae nam voluptates officiis assumenda, quasi culpa nemo! Eveniet eaque esse illum officiis quos ratione nostrum! Eum voluptates repellendus nesciunt, dolorum saepe qui nam!</p>
                </Animate>
                <Animate play duration={1} delay={0} start={{
                    transform:'translateX(500px)'
                }}
                end={{
                    transform:'translateX(0px)'
                }}>
                <h3 className="personalContent">Personal Infos</h3>
             <ul>
                {
                    personalData.map((item,key)=>(
                        <li key={key}>
                             <span className="title">{item.label}:</span>
                             <span className="value"> {item.value}</span>
                        </li>
                    ))
                }
             </ul>
                </Animate>
             
             
                
            </div>
            <div className="about__content__serviceWrapper">
                <Animate play duration={1} delay={0} start={{
                    transform:'translateX(300px)'
                }}
                end={{
                    transform:'translateX(0px)'
                }}>
                <div className="about__content__serviceWrapper__innerContent">
                <div><DiApple size={60} color="var(--selected-theme-main-color)"/></div>
                <div><FaDatabase size={60} color="var(--selected-theme-main-color)" /></div>
                <div><DiAndroid size={60} color="var(--selected-theme-main-color)" /></div>
                <div><FaDev size={60} color="var(--selected-theme-main-color)" /></div>
               </div>
                </Animate>
               
            </div>
        </div>
       </section>
    )
};
export default About;
