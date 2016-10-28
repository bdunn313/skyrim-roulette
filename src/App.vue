<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <a
          class="button is-large"
          @click="generate"
          :class="{'is-loading': isLoading, 'is-disbled': isLoading}">
          Generate
        </a>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <character
          v-if="isFinished"
          :title="character.title"
          :race="character.race"
          :follower="character.follower"
          :craft="character.craft"
          :skills="character.skills"
          :restrictions="character.restrictions"/>
      </div>
    </section>
  </div>
</template>

<script>
// Data
import races from './data/races.js'
import followers from './data/followers.js'
import factions from './data/factions.js'
import playstyles from './data/playstyle.js'

// Components
import Character from './components/Character.vue'

// General stuff
let blankCharacter = {
  title: '',
  skills: [],
  restrictions: [],
  craft: '',
  race: '',
  faction: '',
  follower: ''
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

// Vue stuff
export default {
  name: 'app',

  data () {
    return {
      isLoading: false,
      isFinished: false,
      character: {
        ...blankCharacter
      }
    }
  },

  methods: {
    generate () {
      // Set to loading and reset the character
      this.isFinished = false
      this.isLoading = true
      this.character = {
        ...blankCharacter
      }
      // Run all the generations async, then wait for all to finish before proceeding.
      let generate = Promise.all([this.generator(playstyles), this.generator(races), this.generator(followers), this.generator(factions)])
      generate.then(values => {
        setTimeout(() => {
          this.character = {
            race: values[1],
            follower: values[2],
            faction: values[3],
            ...values[0]
          }
          this.isFinished = true
          this.isLoading = false
        }, 500)
      }, reason => {
        console.log(reason)
      })
    },
    generator (list) {
      return new Promise((resolve, reject) => {
        const randInt = getRandomInt(0, 10)
        if (randInt > (list - 1)) {
          reject({
            message: 'Array index does not exist!',
            list: list,
            index: randInt
          })
        }
        resolve(list[randInt])
      })
    }
  },

  components: {
    Character
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
