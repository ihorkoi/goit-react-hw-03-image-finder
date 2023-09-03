import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem image={{ id, webformatURL, largeImageURL }} />;
      })}
    </ul>
  );
};
