import '../../styles/Header.css';

type ButtonProps = {
  title: string;
  link: string;
  openOnNewTab?: boolean;
};

// TODO: use React Router instead
function Button({title, link, openOnNewTab}: ButtonProps) {

  const target = openOnNewTab ? '_target' : '';
  
  return (
    <a className='header-button clickable' href={link} target={target}>
      {title}
    </a>
  );
};
  
export default Button;