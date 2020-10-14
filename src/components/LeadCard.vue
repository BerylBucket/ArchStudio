<template>
  <div class="leadImg"><img v-bind:src="img"></img><div class="info"><span class="name"><slot name="name"></slot></span><br/><span class="role"><slot name="role"></slot></span><div class="icons"><i class="fab fa-linkedin"></i> &nbsp; <i class="fab fa-twitter"></i></div></div></div>
</template>

<script>
  export default {
    props: {
      img: String
    }
  }
</script>

<style scoped>
  .leadImg{width: 100%; background: #f7f7f7;}.leadImg img {width:100%;}.leadImg .name{display: inline-block;font-weight: 700;margin-top: 20px;margin-bottom: 8px;font-size: 20px;}.leadImg .role{color: #777;}.leadImg .icons{font-size: 36px; margin-top: 10px;}
</style>
