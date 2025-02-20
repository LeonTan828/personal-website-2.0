import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import letterboxd_img from '../../../../assets/images/letterboxd.png';

// import '../../../styles/info_sections/Interests.css';

function Movies() {
  
  const title = 'Movies';
  const bodyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  
  const letterboxdProfile = 'https://letterboxd.com/RogueRebel7/';

  return (
    <div>
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