import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";

import hiking_img_1 from '../../../../assets/images/hiking1.jpeg';
import hiking_img_2 from '../../../../assets/images/hiking2.jpeg';
import hiking_img_3 from '../../../../assets/images/hiking3.jpeg';

// import '../../../styles/info_sections/Interests.css';

function Hiking() {
  
  const title = 'Hiking';
  const bodyContent =
  `I love the outdoor nature and it's one of the main reason why I chose to move\
  to Colorado when I had the opportunity to do so. Every year, especially during summer and\
  fall season, I'd look for hiking trails and try to go for a hike if I can.\
  I also love visiting the National Parks, and I hope to be able to visit as many of them\
  as I can.
  `;

  return (
    <div>
      <div className='content-row'>
        <ImageTile
          src={hiking_img_1}
        />
        <TextBox
          title={title}
          body={bodyContent}
        />
      </div>
      <div className='content-row'>
        <ImageTile
          src={hiking_img_2}
        />
        <ImageTile
          src={hiking_img_3}
        />

      </div>
    </div>
  );
};
  
export default Hiking;