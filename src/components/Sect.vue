<template>
  <div class="sect">
    <div class="body">
      <h1><slot name="title"></slot></h1>
      <div class="spacer" :style="spacerStyle"></div>
      <div class="lineWrap" :style="lineStyle">
        <Ln></Ln>
      </div>
      <h2><slot name="heading"></slot></h2>
      <slot name="body"></slot>
    </div>
    <div :style="'background-image: url(' + this.img + ')'" class="image"></div>
  </div>
</template>

<script>
import Ln from "./Ln.vue";

export default {
  name: "Sect",
  components: {
    Ln,
  },
  props: {
    img: String,
    showtitle: Boolean,
  },
  computed: {
    spacerStyle() {
      var style;
      if (this.showtitle) {
        style = "";
      } else {
        style = "display: none";
      }
      return style;
    },
    lineStyle() {
      var style;
      if (this.showtitle) {
        style =
          "@media screen and (min-width: 1024px) { .sect .lineWrap {opacity: 0; }}";
      } else {
        style = "";
      }
      return style;
    },
  },
};
</script>

<style scoped>
.sect {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  grid-gap: 1.5rem;
}
@media screen and (min-width: 1024px) {
  .sect {
    padding: 5rem;
  }
}
@media screen and (max-width: 1023px) {
  .sect .spacer,
  .sect h1 {
    display: none;
  }
}
.sect .spacer {
  height: 98px;
}
.sect h1 {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 160px;
  color: #eeeff4;
}
.sect p {
  margin-top: 2rem;
}
.sect .body {
  grid-column: span 5;
  position: relative;
}
.sect .image {
  width: auto;
  height: 100%;
  float: right;
  grid-column: span 3;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
