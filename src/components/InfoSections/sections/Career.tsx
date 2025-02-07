import Bullets from "../components/Bullets";

// import '../../../styles/info_sections/Career.css';

function Career() {
  
  const title = 'Career';

  const bodyContent = [
    {
      bulletPoint: 'point 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    },
    {
      bulletPoint: 'point 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    },
    {
      bulletPoint: 'point 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    }
  ];

  return (
    <div className='career'>
      <Bullets
        title={title}
        body={bodyContent}
      />
    </div>
  );
};
  
export default Career;