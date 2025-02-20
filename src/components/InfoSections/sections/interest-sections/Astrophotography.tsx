import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";

import astrophotography_img_1 from '../../../../assets/images/astrophotography1.png';
import astrophotography_img_2 from '../../../../assets/images/astrophotography2.png';
import astrophotography_img_3 from '../../../../assets/images/astrophotography3.png';

import '../../../../styles/info_sections/interest-sections/Astrophotography.css';

function Astrophotography() {

  const title = 'Astrophotography';
  const bodyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  
  return (
    <div>
      <div className='content-row'>
        <ImageTile
          src={astrophotography_img_1}
        />
        <TextBox
          title={title}
          body={bodyContent}
        />
      </div>
      <div className='content-row'>
        <ImageTile
          src={astrophotography_img_2}
        />
        <ImageTile
          src={astrophotography_img_3}
        />
      </div>
    </div>
  );
};
  
export default Astrophotography;