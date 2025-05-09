import '../../styles/MainBanner.css';

function MainBanner() {

  const titleText = `Hi, my name is Leon`;
  const subtitleText = `Welcome to my personal website!`;
  
  return (
    <div className='main-banner' id='page-top'>
      <div className='title-box'>
        <div className='banner-title'>{titleText}</div>
        <div className='banner-subtitle'>{subtitleText}</div>
      </div>
    </div>
  );
};
  
export default MainBanner;