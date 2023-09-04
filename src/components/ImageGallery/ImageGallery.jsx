import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="imageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem image={{ id, webformatURL, largeImageURL }} />;
      })}
    </ul>
  );
};
