<template>
  <div class="featImg">
    <PortImg :img="img"
      ><template v-slot:name><slot></slot></template
      ><template v-slot:date><a>View All Projects</a></template></PortImg
    >
    <div class="num">{{ num }}</div>
  </div>
</template>

<script>
import PortImg from "./PortImg";

export default {
  name: "FeatImg",
  components: {
    PortImg,
  },
  props: {
    img: String,
    num: String,
  },
};
</script>

<style scoped>
.featImg {
  position: relative;
}
.featImg .num {
  font-weight: 700;
  position: absolute;
  top: 18px;
  right: 0;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.3);
}
</style>
