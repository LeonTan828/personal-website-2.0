import AboutMe from "./sections/AboutMe";

import '../../styles/info_sections/InfoSections.css';

function InfoSections() {
  
  return (
    <div className='info-section'>
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </div>
  );
};
  
export default InfoSections;