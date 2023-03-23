import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import images from "~/assets/images/banner";
import "react-slideshow-image/dist/styles.css";
const slideImages = [images.slide1, images.slide2];
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  // onChange: (oldIndex, newIndex) => {

  // },
};
const cx = classNames.bind(styles);
function Banner() {
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className={cx("container")}>
        <Slide
          easing="ease"
          {...properties}
          onChange={(a, b) => setIndex(a === 1 ? 1 : 0)}
        >
          {slideImages.map((slide, index) => {
            return <img src={slide} alt="" className={cx("img")} key={index} />;
          })}
        </Slide>
      </div>
    </>
  );
}

export default Banner;
