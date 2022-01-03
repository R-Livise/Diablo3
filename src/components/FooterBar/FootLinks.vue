<template>
  <div class="d-inline">
      <v-btn color="grey" plain  :to="{name: 'Home'}">Home</v-btn>
      <v-btn color="grey" plain :to="{name: 'About'}">About</v-btn>
      <v-btn color="grey" plain href="https://github.com/baumannzone/diablo3-vue-platzi" target="_blank">Github</v-btn>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
