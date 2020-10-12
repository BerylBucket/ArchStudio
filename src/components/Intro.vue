<template>
<section class="intro">
  <div class="backImage"></div>
  <div class="content">
    <h1><slot name="title"></slot></h1>
    <ln></ln>
    <h2><slot name="heading"></slot></h2>
    <p>
       <slot name="body"></slot>
    </p>  
</div>
</section>
</template>

<script>
  import Ln from "./Ln";
  export default {
    name: "Intro",
    components: {
      Ln
    }
  }
</script>

<style scoped>
  .intro {
  position: relative;
  width: 100%;
  height: 650px;
  padding: 0 0 4rem 0;
}

.intro h1 {
  top: -75px;
  left: -70px;
  position: absolute;
  font-size: 7.5rem;
  color: #eeeff4;
}

.intro h2 {
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: -0.143rem;
  font-weight: 700;
}
.intro p {
  color: #60636d;
  margin-top: 2rem;
}

.intro .backImage {
  background-image: url("https://i.ibb.co/dBNq4SP/60-D78796-4-C78-4472-9-B37-8-E33-DB206-F39.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 700px;
}
.intro .content {
  background: #fefefe;
  position: relative;
  transform: translateX(calc(100% - 378px)) translateY(-100%);
  padding: 8rem 2rem 2rem 8rem;
  width: 700px;
  height: 400px;
}
@media screen and (max-width: 1023px) {
  .intro {
margin:0;
    padding: 0;
height: auto;
  }
  .intro h1 {
    display: none;
  }
  .intro .backImage {
    width: 100%;
    height: 180px;
  }
  .intro .content {
    width: 100%;
    max-width: 500px;
    transform: translateX(0) translateY(-40px);
    padding: 3rem;
  }
}
</style>
