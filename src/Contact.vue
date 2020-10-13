<template>
  <div>
    <Navbar active="3"></Navbar>
    <Foot></Foot>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Foot from "./components/Foot";
  
  export default {
    components: {
      Navbar, Foot
    }
  }
</script>
