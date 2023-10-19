import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";


export const portfolioData=[
   {
    sectionId:2,
    projectName:'jobportal',
    projectLink:'https://github.com/ml2325/JobPortal',
    image:ImageOne,
   },

   {
    sectionId:3,
    projectName:'design app',
    projectLink:'https://github.com/ml2325/10_small_front_projects',
    image:ImageTwo,
   },
   {
    sectionId:2,
    projectName:'blog ',
    projectLink:'https://github.com/ml2325/blogy_laravel',
    image:ImageThree,
   },
   {
    sectionId:2,
    projectName:'my pet',
    projectLink:'null',
    image:ImageFour,
   },
   {
    sectionId:3,
    projectName:'design',
    projectLink:'https://github.com/ml2325/10_small_front_projects',
    image:ImageFive,
   },
  
]



export const filterOptions=[
    {
      label:'All',
      id:1
    },
    {
        label:'Developement',
        id:2
      },
      {
        label:'Design',
        id:3
      }
]