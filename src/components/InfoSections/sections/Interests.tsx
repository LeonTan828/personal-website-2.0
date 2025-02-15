import Astrophotography from "./interest-sections/Astrophotography";
import Movies from "./interest-sections/Movies";

// import '../../../styles/info_sections/Interests.css';

function Interests() {
  
  return (
    <div className='interests'>
      <div className='title'>Interests</div>
      <Astrophotography />
      <Movies />
    </div>
  );
};
  
export default Interests;