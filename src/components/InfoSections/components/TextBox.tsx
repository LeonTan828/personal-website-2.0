// import '../../styles/MainBanner.css';

type TextBoxProps = {
  title: string;
  body: string;
}

function TextBox({title, body}: TextBoxProps) {
  
  return (
    <div className='text-box'>
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  );
};
  
export default TextBox;