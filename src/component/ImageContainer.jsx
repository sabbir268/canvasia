const ImageContainer = (image) => {
  return (
    <div className="col-md-4 p-2 shadow-sm">
      <img src={image.src} alt={image.name} className="img-responsive w-100" />
    </div>
  );
};

export default ImageContainer;
