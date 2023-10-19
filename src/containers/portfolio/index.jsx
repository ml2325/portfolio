import React, { useState } from "react"; // Import useState from React
import PageHeaderContent from '../../components/pageHeaderContent';
import { AiFillProject } from 'react-icons/ai'
import { filterOptions, portfolioData } from "./utils";
import './styles.scss';

const Portfolio = () => {
  // Change "consr" to "const" and import "useState"
  const [filterValue, setFilterValue] = useState(1); 
  const [hoverIndex,setHoverdIndex] =useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  }
  console.log(filterValue);

  const filteredPortfolioData=filterValue===1 ? portfolioData:
  portfolioData.filter(item=> item.sectionId === filterValue);



  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="Projects" icon={<AiFillProject size={40} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterOptions.map((option) => (
              <li onClick={() => handleFilter(option.id)} key={`filter${option.id}`} className={option.id === filterValue ? 'active' :''}>
                {option.label}
              </li>
            ))
          }
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredPortfolioData.map((item,key) => (
              <div onMouseEnter={()=>setHoverdIndex(key)}
              onMouseLeave={()=>setHoverdIndex(null)}
               key={key} className="portfolio__content__cards__item">
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    {/* You need to provide a source for the image */}
                    <img src={item.image} alt="project" />
                  </a>
                </div>

                <div className="overlay">
                  {
                    hoverIndex ===key && (
                      <div >
                      <p>{item.projectName}</p>
                      <button onClick={() => alert(`Viewing: ${item.projectLink}`)}>View</button>
                    </div>
                    )
                  }
                 
                </div>
              </div>
            ))

          }
        </div>
      </div>
    </section>
  )
};

export default Portfolio;
