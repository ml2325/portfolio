import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import {RiContactsFill} from 'react-icons/ri';
import  './styles.scss';

const Contact =()=>{
    return(
        <section className="contact" id="contact">
            <PageHeaderContent 
            headerText="Contact Me"
            icon={<RiContactsFill size={40}/>}
            />
            <div className="contact__content">
                <h3 className="contact__content__text">Let's Talk</h3>
                <div className="contact__content__form">
                <div className="contact__content__form__controlsWrapper">
                    <div className="namewrapper">
                        <input type="text" name="name" className="inputName" />
                        <label htmlFor="name" className="namelabel">Name</label>
                    </div>
                    <div className="emailwrapper">
                    <input type="text" name="email" className="inputEmail" />
                        <label htmlFor="email" className="emaillabel">Email</label>
                    </div>
                    <div className="descriptionwrapper">
                         <textarea name="description" className="description" type="text"  rows={'5'} style={{resize:"none"}}/>
                         <label htmlFor="description" className="descriptionlabel">Description</label>
                    </div>
                </div>
                      <button>Submit</button>
                </div>
            </div>
        </section>
    )
};
export default Contact;
