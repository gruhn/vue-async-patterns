import request from './request.js'

export default {
  template: `
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child" v-html="post"></div>
        <div class="tile is-child" v-html="comments"></div>
      </div>

      <div class="tile is-4 is-parent">
        <div class="tile is-child" v-html="sidebar"></div>
      </div>
    </div>
  `,

  data () {
    return {
      post: null,
      comments: null,
      sidebar: null
    }
  },

  created () {
    this.loadPost()
    this.loadSidebar()
    this.loadComments()
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
