export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
}) => {
  return (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt="" />
    </li>
  );
};
