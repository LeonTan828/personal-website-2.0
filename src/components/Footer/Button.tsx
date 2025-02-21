import '../../styles/Header.css';

type ButtonProps = {
  title: string;
  link: string;
  openOnNewTab?: boolean;
};

function Button({title, link, openOnNewTab}: ButtonProps) {
  
  const target = openOnNewTab ? '_target' : '';

  return (
    <a className='footer-button clickable' href={link} target={target}>
      {title}
    </a>
  );
};
  
export default Button;