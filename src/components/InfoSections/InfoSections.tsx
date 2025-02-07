import AboutMe from "./sections/AboutMe";
import Career from "./sections/Career";

import '../../styles/info_sections/InfoSections.css';

function InfoSections() {
  
  return (
    <div className='info-section'>
      <AboutMe />
      <Career />
      <AboutMe />
      <AboutMe />
    </div>
  );
};
  
export default InfoSections;