import API from './API.js'

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

  created () {
    this.loadPost()
    this.loadSidebar()
    this.loadComments()
  },

  mixins: [ API ]

}
