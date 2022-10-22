import Slide from "./slide.js";

const slideWrapper = new Slide(".wrapper", ".slide");
slideWrapper.init();

slideWrapper.changeSlide(4);
// slideWrapper.activePrevSlide();
