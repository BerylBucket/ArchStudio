<template>
  <div class="sect">
    <div class="body">
      <h1>Welcome</h1>
      <div class="spacer"></div>
      <div class="lineWrap">
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
    Ln
  },
  props: {
    img: String
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/spartan/v2/l7gfbjR61M69yt8Z2QKtlAXJExs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/spartan/v2/l7gfbjR61M69yt8Z2QKtlAXJExs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Spartan, sans-serif;
}

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
  .sect .lineWrap {
    opacity: 0;
  }
}
@media screen and (max-width: 1023px) {
  .sect .spacer, .sect h1{
    display: none;
  }
}
.sect .spacer{
  height: 98px;
}
.sect h1{
  position: absolute;
  top:0;
  left:0;
  font-size: 160px;
  color: #EEEFF4;
}
.sect h2 {
  font-size: 2.5rem;
}
.sect p {
  color: #60636d;
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
