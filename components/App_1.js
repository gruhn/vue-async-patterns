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
      loading: true
    }
  },

  // async/await syntax
  /*
  created () {
    setTimeout(async () => {
      await this.loadPost()
      await this.loadSidebar()
      await this.loadComments()

      this.loading = false
    }, 500)
  },
  */

  // pure Promise syntax
  created () {
    setTimeout(() => {
      this.loadPost()
        .then(() => this.loadSidebar())
        .then(() => {
          this.loading = false
          this.loadComments()
        })
    }, 500)
  },

  mixins: [ API ]

}
