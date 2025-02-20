import Button from './Button';

import '../../styles/Header.css';

function Header() {
  
  return (
    <div className='header'>
      <Button
        title='Leon Yee Leong Tan'
      />
      <div className='navbar'>
        <Button
          title='About Me'
        />
        <Button
          title='Career'
        />
        <Button
          title='Interests'
        />
        <Button
          title='Resume'
        />
      </div>  
    </div>
  );
};
  
export default Header;