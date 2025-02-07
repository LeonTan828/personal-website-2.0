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
      <div className='body'>
        {body.map((bulletEntry) => {
          const { bulletPoint, desc } = bulletEntry;

          return <BulletPoint
                  bulletPoint={bulletPoint}
                  desc={desc}
                />;
        })}
      </div>
    </div>
  );
};

function BulletPoint({bulletPoint, desc}: bodyJSON) {
  return (
    <>
      <div>&#x2022; {bulletPoint}</div>
      <div>{desc}</div>
    </>
  );
}
  
export default Bullets;