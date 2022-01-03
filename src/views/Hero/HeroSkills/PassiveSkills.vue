<template>
  <div class="passive-skills">
    <h4 class="my-5">Passive</h4>
    <div class="skills">
      <v-row>
        <v-col v-for="(skill, idx) in skills" :key="idx" cols="6" lg="12">
          <passive-skill :skill="skill.skill"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import PassiveSkill from './PassiveSkill'

export default {
  name: 'PassiveSkills',
  components: { PassiveSkill },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
