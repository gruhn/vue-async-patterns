import request from './request.js'

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
      post: null,
      comments: null,
      sidebar: null,

      timeoutPassed: false
    }
  },

  created () {
    setTimeout(() => {
      this.timeoutPassed = true
    }, 500)

    this.loadPost()
    this.loadSidebar()
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

  methods: {
    async loadPost () {
      this.post = await request('./data/post.html')
    },

    async loadComments () {
      this.comments = await request('./data/comments.html')
    },

    async loadSidebar () {
      this.sidebar = await request('./data/sidebar.html')
    }
  }

}
