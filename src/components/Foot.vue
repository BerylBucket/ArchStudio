<template>
  <div class="footer"><div class="logo">Arch</div><a class="link">Portfolio</a><a class="link">About Us</a><a class="link">Contact</a><a class="btn">See Our Portfolio &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path d="M15 1l9 9-9 9M0 10h24" fill="none" fill-rule="evenodd" stroke="#f5f5f5" stroke-width="2"/></svg></a></div>
</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style scoped>
  .footer {background: linear-gradient(to left, transparent 100px, #eee 100px);height: 120px;color: #777;position: relative; margin-top:30px;}
  .footer .logo { display: inline-block; font-weight: 900;font-size: 36px;letter-spacing: -0.15em; background: #222; color: #f7f7f7; margin-right: 60px;width: 120px;height: 120px;line-height: 120px;text-align: center;}
  .footer .link {display: inline-block;transform: translateY(-8px); padding: 18px 20px; text-decoration: none;}
  .footer .btn {display:flex;font-weight: 700;position: absolute;right: 0;bottom: calc(50% - 26px);background: #222;color: #f7f7f7;padding: 16px;}
  @media (max-width: 700px) {
  .footer {height: 420px;text-align: center;background: linear-gradient(to bottom, transparent 60px, #eee 60px);}
  .footer .logo {display: inline-block;margin: 0 auto 30px auto;}
  .footer .link {background: #eee;float: none;display: block;color: #777;width: 100%;}
  .footer .btn {display: inline-block; position: relative;margin-top: 12px;}
  .footer .btn svg{transform: translateY(3px);}
  }
</style>
