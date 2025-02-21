import '../../../styles/info_sections/components/Button.css';

type ButtonProps = {
  title: string;
  link: string;
  openOnNewTab?: boolean;
};

function Button({title, link, openOnNewTab}: ButtonProps) {

  const target = openOnNewTab ? '_target' : '';
  
  return (
    <a className='button clickable' href={link} target={target}>
      {title}
    </a>
  );
};
  
export default Button;