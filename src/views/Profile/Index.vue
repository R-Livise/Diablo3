<template>
  <div>
    <base-loading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <h1 class="font-diablo">Profile View</h1>
      <hr/>
      <main-block :profile-data="profileData"/>

      <artisans-block :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
// components
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index.vue'
import ArtisansBlock from './ArtisansBlock/Index.vue'
// mixins
import setError from '@/mixins/setError'
// api
import { getApiAccount } from '@/api/search'
export default {
  name: 'ProfileView',
  components: { BaseLoading, MainBlock, ArtisansBlock },

  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null,
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    this.fetchData()
  },

  methods: {
    fetchData () {
      /**
       * Return account's information
       */
      const { region, battleTag: account } = this.$route.params

      getApiAccount({ region, account }).then(({ data }) => {
        this.profileData = data
      }).catch(err => {
        this.profileData = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }

        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        // store by mixin
        this.setApiErr(errObj)
        // redirecion
        this.$router.push({ name: 'Error' })
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  }

}
</script>

<style>

</style>
