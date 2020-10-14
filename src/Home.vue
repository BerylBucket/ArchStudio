<template>
  <div>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Sect
      img="https://raw.githubusercontent.com/BerylBucket/ArchStudio/dev/src/assets/welcome.JPG"
      :showtitle="true"
    >
      <template v-slot:title> Welcome </template>
      <template v-slot:heading> Welcome to Arch Studio </template>
      <template v-slot:body>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </template>
    </Sect>
    <section id="featured">
      <h2>Featured</h2>
      <div id="featImgs">
        <FeatImg
          img="https://i.ibb.co/HKTjKck/FA26-FC69-1523-4-E38-97-EA-47-C218-EE375-B.jpg"
          num="1"
          >Project Del Sol</FeatImg
        >
        <FeatImg
          img="https://i.ibb.co/7gT2J5b/D4-A03-BE9-175-E-47-BF-89-E2-6-F80-A9-A26407.jpg"
          num="2"
          >228B Tower</FeatImg
        >
        <FeatImg
          img="https://i.ibb.co/T08S8tp/49-D8-D034-211-C-4-DE4-AD62-FCB6-D596-CE0-E.jpg"
          num="3"
          >Le Prototype</FeatImg
        >
      </div>
    </section>
    <Foot></Foot>
  </div>
</template>

<style>
#featured {
  padding: 2rem;
}
#featImgs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>

<script>
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Sect from "./components/Sect";
import FeatImg from "./components/img/FeatImg";
import Foot from "./components/Foot";

export default {
  components: {
    Navbar,
    Sect,
    Foot,
    Carousel,
    FeatImg,
  },
};
</script>
