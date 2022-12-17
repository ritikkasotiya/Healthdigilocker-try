import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// import AwsSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import first from "../../assets/images/slider_1.webp";
import second from "../../assets/images/slider_2.webp";
import third from "../../assets/images/slider_3.webp";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main_Slider = () => {
  return (
    <>
      <AutoplaySlider
        cancelOnInteraction={false}
        interval={3000}
        play={true}
        className=" h-[90vh] max-w-full"
      >
        <div data-src={first} />
        <div data-src={second} />
        <div data-src={third} />
      </AutoplaySlider>
    </>
  );
};

export default Main_Slider;
