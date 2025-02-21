import ImageTile from "../components/ImageTile";
import TextBox from "../components/TextBox";

import aboutMe_img from '../../../assets/images/aboutMe.jpg';

import '../../../styles/info_sections/AboutMe.css';

function AboutMe() {
  
  const title = 'About Me';
  const bodyContent =
  `I was born and raised in Kuala Lumpur, Malaysia, and spent the first 19 years of my life there.
  
  In 2015, I came to the United States to pursue my undergraduate degree. I enrolled into\
  University of Wisconsin - Madison, and graduated in 2019 with a B.S. in Biology and\
  Computer Science. I then moved to Denver in 2022, and have been living here ever since.
  `;

  return (
    <div className='about-me' id='about-me'>
      <ImageTile
        src={aboutMe_img}
      />
      <TextBox
        title={title}
        body={bodyContent}
      />
    </div>
  );
};
  
export default AboutMe;