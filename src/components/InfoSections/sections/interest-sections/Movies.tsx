import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import letterboxd_img from '../../../../assets/images/letterboxd.png';

// import '../../../styles/info_sections/Interests.css';

function Movies() {
  
  const title = 'Movies';
  const bodyContent = 
  `When I'm staying indoor at my home, my favorite pastime activity is to watch movies.\
  Having grown up in a multi-cultural country, I was fortunate enough to be exposed to\
  a huge variety of movies produced by various different countries and cultural background.\
  If you are interested to learn more, feel free to check out my Letterboxd account!
  `;

  const letterboxdProfile = 'https://letterboxd.com/RogueRebel7/';

  return (
    <div className='interest-subsection'>
      <div className='content-row'>
        <ImageTile
          src={letterboxd_img}
        />
        <div className='content-column'>
          <TextBox
            title={title}
            body={bodyContent}
          />
          <Button
            title='Check out my Letterboxd'
            link={letterboxdProfile}
            openOnNewTab
          />
        </div>
      </div>
    </div>
  );
};
  
export default Movies;