<template>
  <div>
    <h2 class="my-4 font-diablo">Heroes List</h2>
    <v-data-table dark :items="heroes" :headers="headers" >
      <template #[`item.name`]="{item}">
        <hero-ico :hero="item"/>
      </template>
      <template #[`item.class`]="{item}">
        <hero-class-level :hero="item"/>
      </template>
      <template #[`item.kills`]="{value}">
        {{value.elites | formatNumber}}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral'
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
export default {
  name: 'HeroesList',
  filters: { formatNumber },
  components: { HeroIco, HeroClassLevel },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Class', value: 'class' },
        { text: 'Elite kills', value: 'kills' }
      ]
    }
  }
}
</script>
