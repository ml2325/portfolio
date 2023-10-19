import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import { GiSkills } from 'react-icons/gi';
import { skillsData } from "./utils";
import { Line } from 'rc-progress';
import {Animate} from 'react-simple-animate';
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, key) => {
          return (
            <div key={key} className="skills__content-wrapper__inner-content">
              <Animate 
              play
              duration={1}
              delay={0.4}
              start={{
                trasform:'translateX(-500px)'
              }}
              end={{
                trasform:'translateX(0px)'
              }}
              >
              <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
              <div>
                {item.data.map((dataItem, index) => (
                  <div className="progressbat-wrapper" key={index}>
                    <p>{dataItem.skillName}</p>
                    <Line
                      percent={dataItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--selected-theme-main-color)"
                      strokeLinecap="square"
                      trailWidth="2"
                    />
                  </div>
                ))}
              </div>
              </Animate>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
