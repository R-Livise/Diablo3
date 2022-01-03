<template >
    <v-app-bar
      elevation="3"
      dark
      color="grey darken-2"
    >
      <brand-title/>
      <v-spacer/>
      <breadcrumb-bar/>

    </v-app-bar>

</template>

<script>
// import { listSeasons } from '@/api/season'
import BrandTitle from './BrandTitle'
import BreadcrumbBar from './BreadcrumbBar'
export default {
  name: 'HeaderBar',
  components: {
    BrandTitle,
    BreadcrumbBar
  },
  data () {
    return {
      currentSeason: null
    }
  },
  created () {
    const region = 'eu'
    this.fetchSeasons(region)
  },
  methods: {
    fetchSeasons (region) {
      // listSeasons(region)
      //   .then(({ data }) => {
      //     this.currentSeason = data.current_season
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      return 'l'
    }
  }
}
</script>
