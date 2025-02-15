import ImageTile from "../../components/ImageTile";
import TextBox from "../../components/TextBox";

// TODO: replace
import placeholder from '../../../../assets/images/placeholder.png';
import placeholder2 from '../../../../assets/images/placeholder2.jpg';
import placeholder3 from '../../../../assets/images/placeholder3.jpg';

// import '../../../styles/info_sections/Interests.css';

function Hiking() {
  
  const title = 'Hiking';
  const bodyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <div>
      <div className='content-row'>
        <ImageTile
          src={placeholder2}
        />
        <TextBox
          title={title}
          body={bodyContent}
        />
      </div>
      <div className='content-row'>
        <ImageTile
          src={placeholder}
        />
        <ImageTile
          src={placeholder3}
        />
      </div>
    </div>
  );
};
  
export default Hiking;