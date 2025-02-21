import Bullets from "../components/Bullets";
import Button from "../components/Button";

import resume from '../../../assets/documents/Leon\'s Resume.pdf';

import '../../../styles/info_sections/Career.css';

function Career() {
  
  const title = 'Career';

  const bodyContent = [
    {
      bulletPoint: 'Application Software Engineer',
      desc:
      `Emerald Cloud Lab, 2021 - 2024
      
      I was a frontend software engineer for the biotech startup and I helped develop, test,\
      deploy and maintain various external and internal applications of the company.\
      Through this position, I had the opportunity to learn from many talented people and gain\
      valuable experience in developing software solutions using NW.js, Node.js, React, Redux,\
      JavaScript, TypeScript, Emotion CSS and Wolfram Mathematica.
      `,
    },
    {
      bulletPoint: 'Software Developer & Project Coordinator',
      desc: 
      `Academy for Surgical Coaching, 2020 - 2021
      
      I initially joined this non-profit organization as a volunteer, but soon it turned into\
      a full time position. During my time there, I helped plan, design, develop and maintain\
      the internal systems and softwares used to provide the infrastructure for coaching\
      services. Some of the tools and languages that I had to worked with includes MySQL,\
      PHP and Python.
      `,
    },
    {
      bulletPoint: 'IAM Administrator',
      desc:
      `UW Madison DoIT, 2020 - 2020
      
      This was my first job out of college. While I was there, I was given various opportunity\
      to leverage my skills in Python and Node.js to develop solutions to help optimize various\
      operations within the team and help improve efficiency.
      `,
    }
  ];

  return (
    <div className='career' id='career'>
      <Bullets
        title={title}
        body={bodyContent}
      />
      <Button
        title='resume'
        link={resume}
        openOnNewTab
      />
    </div>
  );
};
  
export default Career;