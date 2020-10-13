<template>
  <div>
    <Navbar active="3"></Navbar>
    <Intro>
      <template v-slot:title>Contact</template>
      <template v-slot:heading>Tell us about your project</template>
      <template v-slot:body>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</template>
    </Intro>
    <Foot></Foot>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Intro from "./components/Intro";
  import Foot from "./components/Foot";
  
  export default {
    components: {
      Navbar, Intro, Foot
    }
  }
</script>
