<template>
  <img
    :src="icon"
    :rel="name"
    :title="name"
    class="skill-icon image is-64x64"/>
</template>

<script>
const skillMap = [
  'Alchemy',
  'Alteration',
  'Archery',
  'Block',
  'Conjuration',
  'Destruction',
  'Enchanting',
  'Heavy Armor',
  'Illusion',
  'Light Armor',
  'Lockpicking',
  'One-Handed Weapons',
  'One-Handed Weapons (Dual Wielding)',
  'One-Handed',
  'Pickpocket',
  'Restoration',
  'Smithing',
  'Sneak',
  'Speechcraft',
  'Two-Handed Weapons',
  'Two-Handed'
]

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return skillMap.indexOf(value) !== -1
      }
    }
  },
  computed: {
    icon () {
      const transformedName = this.name.toLowerCase().replace(/(\s?weapons)(.+)?/i, '').replace(/(\s|-)/, '_')
      return require('../assets/skill_icons/' + transformedName + '.png')
    }
  }
}
</script>

<style>
  .skill-icon {
    background: black
  }
</style>
