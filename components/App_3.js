import API from './API.js'

export default {
  template: `
    <div>
      <h1 v-if="loading" class="title has-text-centered">LOADING...</h1>

      <div v-else class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <div class="tile is-child" v-html="post"></div>
          <div class="tile is-child" v-html="comments"></div>
        </div>

        <div class="tile is-4 is-parent">
          <div class="tile is-child" v-html="sidebar"></div>
        </div>
      </div>
    </div>
  `,

  data () {
    return {
      timeoutPassed: false
    }
  },

  computed: {
    loading () {
      return this.post === null ||
        this.sidebar === null ||
        this.timeoutPassed === false
    }
  },

  watch: {
    loading () {
      this.loadComments()
    }
  },

  created () {
    this.loadPost()
    this.loadSidebar()

    setTimeout(() => {
      this.timeoutPassed = true
    }, 500)
  },

  mixins: [ API ],

}
