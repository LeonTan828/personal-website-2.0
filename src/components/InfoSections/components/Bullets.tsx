import '../../../styles/info_sections/components/Bullets.css';

type BulletsProp = {
  title: string;
  body: bodyJSON[];
};

type bodyJSON = {
  bulletPoint: string;
  desc: string;
};

function Bullets({title, body}: BulletsProp) {

  const bulletPoints = body.map((bulletEntry) => {
    const { bulletPoint, desc } = bulletEntry;

    return (
      <BulletPoint
        bulletPoint={bulletPoint}
        desc={desc}
      />
    );
  });
  
  return (
    <div className='bullets'>
      <div className='title'>{title}</div>
      <div className='bullets-body'>{bulletPoints}</div>
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