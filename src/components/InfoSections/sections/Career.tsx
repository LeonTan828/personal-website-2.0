import Bullets from "../components/Bullets";
import Button from "../components/Button";

import '../../../styles/info_sections/Career.css';

function Career() {
  
  const title = 'Career';

  const bodyContent = [
    {
      bulletPoint: 'point 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus id urna ut tristique. Pellentesque bibendum lorem sed luctus vulputate. Nunc vestibulum eu orci nec mattis. Aenean a cursus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et metus mi. Praesent mauris turpis, congue in sem quis, sollicitudin vehicula tellus. ',
    },
    {
      bulletPoint: 'point 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus id urna ut tristique. Pellentesque bibendum lorem sed luctus vulputate. Nunc vestibulum eu orci nec mattis. Aenean a cursus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et metus mi. Praesent mauris turpis, congue in sem quis, sollicitudin vehicula tellus. ',
    },
    {
      bulletPoint: 'point 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus id urna ut tristique. Pellentesque bibendum lorem sed luctus vulputate. Nunc vestibulum eu orci nec mattis. Aenean a cursus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et metus mi. Praesent mauris turpis, congue in sem quis, sollicitudin vehicula tellus. ',
    }
  ];

  return (
    <div className='career'>
      <Bullets
        title={title}
        body={bodyContent}
      />
      <Button
        title='resume'
        link='placeholder link'
      />
    </div>
  );
};
  
export default Career;