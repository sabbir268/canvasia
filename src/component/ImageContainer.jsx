const ImageContainer = (image) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="image-container p-2 shadow rounded">
        <img
          src={image.image.src}
          alt={image.image.name}
          className="img-responsive w-100"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
