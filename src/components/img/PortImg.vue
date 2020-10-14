<template>
  <div class="portImg" :style="imgStyle">
    <div class="label">
      <span class="name"><slot name="name"></slot></span><br /><span
        ><slot name="date"></slot
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortImg",
  props: {
    img: String,
  },
  data() {
    return {
      imgStyle:
        "background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" +
        this.img +
        ");background-repeat: no-repeat;background-position:center;",
    };
  },
};
</script>

<style scoped>
.portImg {
  max-width: 420px;
  height: 290px;
  position: relative;
  color: #eee;
}
.portImg .name {
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
}
.portImg .label {
  position: absolute;
  left: 25px;
  bottom: 25px;
}
</style>
