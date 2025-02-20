import Astrophotography from "./interest-sections/Astrophotography";
import Hiking from "./interest-sections/Hiking";
import Movies from "./interest-sections/Movies";

import '../../../styles/info_sections/Interests.css';

function Interests() {
  
  return (
    <div className='interests'>
      <div className='interest-title'>Interests</div>
      <Astrophotography />
      <Movies />
      <Hiking />
    </div>
  );
};
  
export default Interests;