<template>
  <div class="carousel">
    <div class="slide">
      <h2>Project Paramour</h2>
      <p>
        Project made for an art museum near Southwest London. Project Paramour
        is a statement of bold, modern architecture.
      </p>
      <a
        >See Our Portfolio
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
          <path
            d="M15 1l9 9-9 9M0 10h24"
            fill="none"
            fill-rule="evenodd"
            stroke="#f5f5f5"
            stroke-width="2"
          /></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .carousel {
    padding: 0 7rem;
  }
}
.carousel .slide {
  width: 100%;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("https://i.ibb.co/d79njHJ/14-AEE1-A9-6469-42-D3-A4-E2-6-C09-BDF6506-E.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 3rem 2rem;
  position: relative;
}
.carousel p {
  margin-top: 10px;
  font-size: 18px;
  color: #999;
}
.carousel a svg {
  margin-left: 12px;
}
.carousel a {
  background: #1b1d23;
  padding: 15px;
  display: flex;
  width: 218px;
  position: absolute;
  bottom: 3rem;
}
</style>
