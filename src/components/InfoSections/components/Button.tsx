import '../../../styles/info_sections/components/Button.css';

type ButtonProps = {
  title: string;
  link: string;
};

function Button({title, link}: ButtonProps) {
  
  return (
    <div className='button clickable'>
      {title}
    </div>
  );
};
  
export default Button;