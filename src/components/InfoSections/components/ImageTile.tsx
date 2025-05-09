import '../../../styles/info_sections/components/ImageTile.css';

type ImageTileProps = {
  src: string;
};

function ImageTile({src}: ImageTileProps) {
  
  return (
    <div className='image-container'>
      <img
        src={src}
      />
    </div>
  );
};
  
export default ImageTile;