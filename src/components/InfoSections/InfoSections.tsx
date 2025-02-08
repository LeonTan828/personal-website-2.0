import AboutMe from "./sections/AboutMe";
import Career from "./sections/Career";
import Interests from "./sections/Interests";

import '../../styles/info_sections/InfoSections.css';

function InfoSections() {
  
  return (
    <div className='info-section'>
      <AboutMe />
      <Career />
      <Interests />
    </div>
  );
};
  
export default InfoSections;