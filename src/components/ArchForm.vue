<template>
  <div class="archform"><slot></slot><a class="subBtn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd" stroke="#f5f5f5" stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg></a></div>
</template>

<script>
  export default{}
</script>

<style scoped>
  .archform{margin-top: 3rem; margin-bottom: 70px;}.archform input, .archform textarea{border:0;border-radius:0;border-bottom: #333 solid 2px;font-size: 1.5rem;font-weight: 700;display: block;line-height: normal;padding: 0.2rem;outline: none;margin-bottom: 3.5rem;width:100%;}.archform input{height: 3.2rem;}.archform textarea{ height: 6rem;margin:0;}.archform *::placeholder {line-height: normal;padding-left: 1rem;}.archform textarea::placeholder{ padding-top: .5rem;}.archform .subBtn{float:right;background: #1b1d23;display: flex;width: 5rem;height: 5rem;align-items:center;justify-content:center;}
</style>
