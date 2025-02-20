import '../../styles/Header.css';

type ButtonProps = {
  title: string;
  link: string;
};

// TODO: use React Router instead
function Button({title, link}: ButtonProps) {
  
  return (
    <a className='header-button clickable' href={link}>
      {title}
    </a>
  );
};
  
export default Button;