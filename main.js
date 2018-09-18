import Vue from './vue.esm.browser.js'
import App1 from './components/App1.js'
// import App2 from './components/App2.js'
// import App3 from './components/App3.js'
// import App4 from './components/App4.js'

new Vue({
  el: '#app',
  render: h => h(App1)
  // render: h => h(App2)
  // render: h => h(App3)
  // render: h => h(App4)
})
