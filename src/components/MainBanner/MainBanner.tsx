// import '../../styles/MainBanner.css'

function MainBanner() {

  const titleText = `Hi, my name is Leon. Welcome to my personal website!`;
  const subtitleText = `Lorem Ipsum`;
  
  return (
    <div className='main-banner'>
      <div className='title-box'>
        {titleText}
        {subtitleText}
      </div>
    </div>
  );
};
  
export default MainBanner;