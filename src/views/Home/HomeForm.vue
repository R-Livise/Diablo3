<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-focus
            id="input-text"
            v-model="form.battleTag"
            :rules="rules.name"
            label="BattleTag"
            dark
            filled
          />
          <br/>
          <v-combobox
            v-model="form.region"
            :rules="rules.name"
            :items="regions"
            label="Region"
            dark
            filled
          />

          <div class="d-flex justify-content-end mt-5">
            <v-btn type="submit" variant="primary" size="lg">Submit</v-btn>
          </div>

        </v-form>
      </div>
    </div>

  </div>
</template>

<script>
import { regions } from '@/utils/regions'
export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      },
      rules: {
        age: [
          val => val < 10 || 'I don\'t believe you!'
        ],
        animal: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required']
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>
