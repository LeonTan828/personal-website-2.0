// import ImageTile from "../components/ImageTile";
import TextBox from "../components/TextBox";

// import placeholder2 from "../../../assets/images/placeholder2.jpg"

// import '../../../styles/info_sections/Career.css';

function Career() {
  
  const title = 'Career';
  const bodyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <div className='career'>

      <TextBox
        title={title}
        body={bodyContent}
      />
    </div>
  );
};
  
export default Career;