import Button from './Button';

import resume from '../../assets/documents/Leon\'s Resume.pdf';

import '../../styles/Footer.css';

function Footer() {
  
  return (
    <div className='footer'>
      <Button
        title='Email'
        link='mailto:leontan.se@gmail.com'
        openOnNewTab
      />
      <Button
        title='LinkedIn'
        link='https://www.linkedin.com/in/leon-yl-tan'
        openOnNewTab
      />
      <Button
        title='Github'
        link='https://github.com/LeonTan828'
        openOnNewTab
      />
      <Button
        title='Resume'
        link={resume}
        openOnNewTab
      />
    </div>
  );
};
  
export default Footer;