// import '../../../styles/info_sections/components/Bullets.css';

type BulletsProp = {
  title: string;
  body: bodyJSON[];
};

type bodyJSON = {
  bulletPoint: string;
  desc: string;
};

function Bullets({title, body}: BulletsProp) {
  
  return (
    <div className='bullets'>
      <div className='title'>{title}</div>
      <div className='body'>{}</div>
    </div>
  );
};
  
export default Bullets;