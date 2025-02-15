import '../../styles/Header.css';

type ButtonProps = {
  title: string;
};

function Button({title}: ButtonProps) {
  
  return (
    <div className='header-button'>
      {title}
    </div>
  );
};
  
export default Button;