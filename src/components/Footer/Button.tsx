import '../../styles/Header.css';

type ButtonProps = {
  title: string;
};

function Button({title}: ButtonProps) {
  
  return (
    <div className='footer-button clickable'>
      {title}
    </div>
  );
};
  
export default Button;