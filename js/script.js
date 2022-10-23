import { Slide, SlideNav } from "./slide.js";

const slideWrapper = new SlideNav(".wrapper", ".slide");
slideWrapper.init();
// slideWrapper.changeSlide(0);

slideWrapper.addArrow(".prev", ".next");
slideWrapper.addControl();
