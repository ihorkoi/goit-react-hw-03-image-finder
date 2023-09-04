import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="imageGallery">
      {images.map(image => {
        return <ImageGalleryItem image={image} />;
      })}
    </ul>
  );
};
