import { useState } from "react";

const ImageSlider = () => {
    const images = [
      "https://picsum.photos/500/200",
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/400",
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div>
        <img src={images[currentIndex]} alt="slider" />
        <div>
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;