import Button from './Button';

import '../../styles/Header.css';

function Footer() {
  
  return (
    <div className='footer'>
      <Button
        title='Email'
      />
      <Button
        title='LinkedIn'
      />
      <Button
        title='Github'
      />
      <Button
        title='Resume'
      />
    </div>
  );
};
  
export default Footer;