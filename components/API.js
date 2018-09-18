
async function request (url) {
  await new Promise(resolve => {
    const minDelay = 1000
    const maxDelay = 3000
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setTimeout(resolve, randomDelay)
  })

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html'
    }
  })

  return response.text()
}

export default {

  data () {
    return {
      post: null,
      comments: null,
      sidebar: null
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
