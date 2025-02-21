import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";

import astrophotography_img_1 from '../../../../assets/images/astrophotography1.png';
import astrophotography_img_2 from '../../../../assets/images/astrophotography2.png';
import astrophotography_img_3 from '../../../../assets/images/astrophotography3.png';

import '../../../../styles/info_sections/interest-sections/Astrophotography.css';

function Astrophotography() {

  const title = 'Astrophotography';
  const bodyContent =
  `I've always had a huge fascination towards space and astronomy.\
  Whenever the opportunity arises, I'd try to make an effort to get out there to\
  observe some of the celestial events available. Over time, I started learning how to capture\
  these phenomena on camera, which has allowed me to share my experience with other people.\
  I also count myself as very lucky to have been able to observe and capture some of the rarer\
  phenomena like aurora and solar eclipse!
  `;

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