<template>
  <div>
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <v-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <v-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <top-hero :hero="hero"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopHero from './TopHero.vue'
export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: { heroes: { type: Array, require: true } }

}
</script>

<style>

</style>
