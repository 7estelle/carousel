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

  const handlePrevious = () => {
    setCurrent((newIndex) => (newIndex === 0 ? slides.length - 1 : newIndex - 1));
  };

  const handleNext = () => {
    setCurrent((newIndex) => (newIndex === slides.length - 1 ? 0 : newIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="images-container">
        <motion.div 
          animate={{ x: - (100 / slides.length) * current + '%' }}
          transition={{ ease: "easeOut", duration: 0.5 }}

          // draggable carousel

          drag="x"
          whileTap={{ cursor: "grabbing" }}
          dragElastic={0.5}

          onDragEnd={(event, info) => {
          if (info.offset.x > 0) {
            handlePrevious();
          } 
          if (info.offset.x < 0) {
            handleNext();
          }
          }}

          style={{
            width: `${slides.length * 100}%`,
          }}

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
        onClick={() => { handlePrevious() }}
      />

      <FaChevronRight
        className="right-arrow"
        onClick={() => { handleNext() }}
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