<template>
  <div>
    <header class="header" data-v-7e33895e>
        这里是博客的头部
    </header>
    <slot />
    <footer class="footer" data-v-07acb5f8>
      <div class="container" data-v-07acb5f8>
        <span data-v-07acb5f8>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.header{
  background: #00ff0033;
}
.footer{
  background: #ffff0033;
}
</style>