import { Slide, SlideNav } from "./slide.js";

const slideWrapper = new SlideNav(".wrapper", ".slide");
slideWrapper.init();
slideWrapper.addArrow(".prev", ".next");
slideWrapper.addControl(".custom-control");
