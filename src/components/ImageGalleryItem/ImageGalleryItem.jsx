export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
}) => {
  return (
    <li className="imageGalleryItem" key={id}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  );
};
