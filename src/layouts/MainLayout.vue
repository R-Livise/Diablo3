<template >
  <div>
    <v-main>
      <v-container >
      <home-header />
      <router-view />
      <home-footer />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import HomeHeader from '@/components/HeaderBar/Index.vue'
import HomeFooter from '@/components/FooterBar/Index.vue'
export default {
  name: 'MainLayout',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>
