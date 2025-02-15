// import '../../../styles/info_sections/components/ImageTile.css';

type ButtonProps = {
  title: string;
  link: string;
};

function Button({title, link}: ButtonProps) {
  
  return (
    <div className='button'>
      {title}
    </div>
  );
};
  
export default Button;