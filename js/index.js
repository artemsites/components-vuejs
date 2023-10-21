import { createApp } from 'vue';

import '/components/theme.scss'
import SwitcherBox from "/components/SwitcherBox.js";
import SliderRange from "/components/SliderRange.js";

createApp({
  components: {
    SwitcherBox,
    SliderRange,
  }
})
.mount('#vue')