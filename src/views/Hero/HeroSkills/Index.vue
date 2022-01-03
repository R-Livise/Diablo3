<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <v-chip-group column mandatory active-class="blue darken-1 blue--text text--lighten-5" >
      <v-chip label @click="changeComponent('ActiveSkills')">Active</v-chip>
      <v-chip label @click="changeComponent('PassiveSkills')">Passive</v-chip>
    </v-chip-group>
    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'HeroSkills',
  components: {
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills" */'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills" */'./PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  },
  computed: {
    /**
     * Dinamyc props for async dynamic components
     * @returns {String}
     */
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  }
}
</script>
