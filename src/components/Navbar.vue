<template>
  <div class="navbar" :class="{ showMenu: showMenu }">
    <span class="logo">Arch</span
    ><a class="link" :class="{ active: active == 1 }">Portfolio</a
    ><a class="link" :class="{ active: active == 2 }">About Us</a
    ><a class="link" :class="{ active: active == 3 }">Contact</a
    ><a class="icon" @click="showMenu = !showMenu"
      ><i class="fa fa-bars"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    active: String,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f7f7f7;
  height: 68px;
}
.navbar .logo {
  display: inline-block;
  font-weight: 900;
  font-size: 38px;
  letter-spacing: -0.15em;
  margin-right: 60px;
  transform: translateX(16px) translateY(15px);
}
.navbar a {
  display: inline-block;
  text-align: center;
  padding: 18px 20px;
  text-decoration: none;
  font-size: 20px;
}
.navbar .link {
  transform: translateY(5px);
  color: #777;
}
.navbar a.active {
  color: #333;
  position: relative;
}
.navbar a.active:after {
  font-family: Arial, Helvetica, sans-serif;
  content: "____";
  position: absolute;
  bottom: 7px;
  left: calc(50% - 24px);
}
.navbar .icon {
  display: none;
  font-size: 36px;
  transform: translateX(2px);
}
@media (max-width: 600px) {
  .navbar a {
    display: none;
  }
  .navbar a.active:after {
    display: none;
  }
  .navbar a.icon {
    float: right;
    display: block;
  }
  .navbar.showMenu {
    position: relative;
  }
  .navbar.showMenu a.icon {
    background: #777;
    color: #ccc;
    height: 68px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .navbar.showMenu .link {
    background: #333;
    float: none;
    display: block;
    text-align: left;
    transform: translateY(22px);
    color: #eee;
    z-index: 99;
  }
}
</style>
