import { initHeader } from "./modules/components/header.js";
import { initSlider } from "./modules/components/slider.js";
import { initModal } from "./modules/components/modal.js";

initHeader();

const slider = initSlider();
const modal = initModal();

slider.startAutoSlide();