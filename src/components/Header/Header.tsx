import Button from './Button';

import resume from '../../assets/documents/Leon\'s Resume.pdf';

import '../../styles/Header.css';

function Header() {
  
  return (
    <div className='header'>
      <Button
        title='Leon Yee Leong Tan'
        link='#page-top'
      />
      <div className='navbar'>
        <Button
          title='About Me'
          link='#about-me'
        />
        <Button
          title='Career'
          link='#career'
        />
        <Button
          title='Interests'
          link='#interests'
        />
        <Button
          title='Resume'
          link={resume}
          openOnNewTab
        />
      </div>  
    </div>
  );
};
  
export default Header;