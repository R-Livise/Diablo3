<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter"> {{heroTime.hero}} </h5>
      <span class="w-50p bg-secondary px-2 text-center rounded">{{ (heroTime.time * 100).toFixed(2) }}
      </span>
    </div>
    <v-progress-linear :value="heroTime.time * 100" :color="heroesBg[heroTime.classSlug]" height="14px" class="mb-3 rounded-0">
      <strong :class="classHeroBg">
        {{ heroTime.hero }}
      </strong>
    </v-progress-linear>
  </div>
</template>
<script>
// Traemos nuestro tipo personalizado
import { HeroData } from '@/utils/typeValidation'

export default {
  name: 'TimePlayedHero',
  data () {
    return {
      heroesBg: {
        barbarian: '#4e1c16',
        crusader: '#795548',
        'demon-hunter': '#F44336',
        monk: '#ff9800',
        necromancer: '#00bcd4',
        'witch-doctor': '#8bc34a',
        wizard: '#3f51b5'
      }
    }
  },
  props: {
    // Definimos la propiedad con el tipo personalizado 'HeroData'
    heroTime: {
      type: HeroData,
      required: true
    }
  },
  computed: {
    // Cada héroe tiene un color
    // Creamos una clase por cada héroe
    classHeroBg () {
      return `hero-bg-color-${this.heroTime.classSlug}`
    }
  }
}
</script>
<style lang="stylus" scoped>

  .progress-time-played

    h5.title
      color #000

    .w-50p
      position relative
      width 65px

</style>
