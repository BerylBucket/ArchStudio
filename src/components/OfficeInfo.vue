<template>
  <div class="conInfo"><h3><slot name="office"></slot></h3><table><tr><th>Mail:</th><td><slot name="email"></slot></td></tr><tr><th>Address: &nbsp;&nbsp;</th><td><slot name="address"></slot></td></tr><tr><th>Phone:</th><td><slot name="phone"></slot></td></tr></table><a class="mapBtn">View on Map<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd" stroke="#1B1D23" stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg></a></div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .conInfo h3{color: #60636D;}.conInfo table{margin: 1rem 0;color: #60636D;}.conInfo th, .conInfo td {font-weight: 500;text-align: left;height:60px;}.conInfo .mapBtn{display: flex;font-weight: 700;}.conInfo .mapBtn svg{ margin-left: 1rem;}
</style>
