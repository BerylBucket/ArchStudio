<template>
  <div>
   <Ln></Ln>
    <Sect img="https://raw.githubusercontent.com/BerylBucket/ArchStudio/dev/src/assets/welcome.JPG">
      <template v-slot:heading>
         Welcome to Arch Studio
      </template>
      <template v-slot:body>
        <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. </p>
        <p>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
        <p>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
      </template>
    </Sect>
  </div>
</template>

<script>
  import Ln from "./components/Ln";
  import Sect from "./components/Sect";
  export default {
    name: "Home",
    components: {
      Ln, Sect
    }
  }
</script>
