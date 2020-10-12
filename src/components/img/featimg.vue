<template>
  <div class="featImg"><portimg :imgurl="img"><template v-slot:name><slot></slot></template><template v-slot:date><a>View All Projects</a></template></portimg><div class="num">{{num}}</div></div>
</template>

<script>
  import portimg from "./portimg.vue";
  
  export default {
    name: "featimg",
    components: {
      portimg
    },
    props: {
      img: String,
      num: String
    }
  }
</script>

<style scoped>
  .featImg{position:relative;}.featImg .num {font-weight: 700;position: absolute; top: 18px;right:0;font-size: 100px;color: rgba(255,255,255,.3);}
</style>
