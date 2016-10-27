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

    <section class="section" v-if="isFinished">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ character.race }} {{ character.title }}</p>
          </header>
          <div class="card-content">
            <section class="level">
              <div class="level-left">
                <div class="level-item subtitle is-6">
                  Skills
                </div> 
              </div>
              <div class="level-right">
                <div class="level-item">One, Two, Three</div>
              </div>
            </section>
            <section class="level">
              <div class="level-left">
                <div class="level-item subtitle is-6">
                  Restrictions
                </div> 
              </div>
              <div class="level-right">
                <div class="level-item">One, Two, Three</div>
              </div>
            </section>
            <section class="level">
              <div class="level-left">
                <div class="level-item subtitle is-6">
                  Craft
                </div> 
              </div>
              <div class="level-right">
                <div class="level-item">{{ character.craft }}</div>
              </div>
            </section>
            <section class="level">
              <div class="level-left">
                <div class="level-item subtitle is-6">
                  Follower
                </div> 
              </div>
              <div class="level-right">
                <div class="level-item">{{ character.follower }}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import races from './data/races.js'
import followers from './data/followers.js'
import factions from './data/factions.js'
import playstyles from './data/playstyle.js'

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
