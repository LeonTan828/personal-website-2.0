// import '../../styles/MainBanner.css';

type ImageTileProps = {
  src: string;
}

function ImageTile({src}: ImageTileProps) {
  
  return (
    <div className='image-box'>
      <img
        src={src}
      />
    </div>
  );
};
  
export default ImageTile;