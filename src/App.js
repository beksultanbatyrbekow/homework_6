import React, {useState} from "react"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://i.pinimg.com/474x/30/f4/0c/30f40c02566f9981446a10d52ece94bd.jpg",
    "https://t3.ftcdn.net/jpg/05/29/37/22/360_F_529372232_2Z75XLUgwHQQmtsgeWwGdpdCx4inCPbP.jpg"
  ]

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
      <div>
        <button onClick={prevSlide}>Назад</button>
        <img src={images[currentSlide]} alt="Фото" />
        <button onClick={nextSlide}>Вперед</button>
      </div>
  );
};

export default Slider;