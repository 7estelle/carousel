import React, { useState } from "react";
import Image from "./Image";
import { motion } from "framer-motion"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const updateCurrent = (newIndex) => {

    // show first slide if user clicks right arrow on last slide
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    // show last slide if user clicks left arrow on first slide
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    setCurrent(newIndex);
  };

  return (
    <div className="carousel">
      <div className="images-container">
        <motion.div 
          animate={{ x: - current * 100 + '%' }} 
          className="images">
          {slides.map((slide, index) => {
            return (
              <Image key={index} src={slide.src} alt={slide.alt} />
            );
          })}
        </motion.div>
      </div>

      <FaChevronLeft
        className="left-arrow"
        onClick={() => { updateCurrent(current - 1) }}
      />

      <FaChevronRight
        className="right-arrow"
        onClick={() => { updateCurrent(current + 1) }}
      />

      <div className="dots">
        {slides.map((slide, index) => {
          return (
            <GoDotFill
              key={index}
              // change svg color if index === current
              fill={index === current ? "#000" : "#fff"}

              onClick={() => { updateCurrent(index) }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel