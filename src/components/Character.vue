<template>
    <div class="card is-fullwidth">
      <div class="card-content">
        <p class="title is-4">{{ title }}</p>
        <p class="subtitle is-5">{{ race }}</p>
        <hr>
        <div>
          <div v-for="skillList in skills" class="columns">
            <skill
              v-for="skill in skillList"
              :name="skill"
              class=""/>
          </div>
        </div>
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
            <div class="level-item">{{ craft }}</div>
          </div>
        </section>
        <section class="level">
          <div class="level-left">
            <div class="level-item subtitle is-6">
              Follower
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">{{ follower }}</div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    race: {
      type: String,
      required: true
    },
    follower: {
      type: String,
      required: true
    },
    craft: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    restrictions: {
      type: Array,
      required: true
    }
  },
  computed: {
    formattedSkills () {
      // TODO: Implement for realz
      return this.skills[0]
    }
  },
  components: {
    Skill
  }
}
</script>

<style>

</style>
