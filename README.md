Example application on how to deal with asynchonous processes and events in Vue.js. Created for [Aachen Vue.js Meetup](https://www.meetup.com/de-DE/aachen-vue-js-meetup/events/254565078/).

To run this locally you need npm and a modern browser<sup>1</sup>. If you have that clone this repository and navigate into the root directory via terminal. Then run the following commands: 

```bash
npm install
npm start
```
You should now be able to access the demo at http://localhost:8080

The master contains an unsolved challenge. Checkout the following branches in the given order for successively improved solutions: 

```bash
git checkout naive-solution
git checkout imperative-solution
git checkout reactive-solution
```

-------------------------------
<sup>1</sup> code is not transpiled or polyfilled. You need native support for [Promise](https://caniuse.com/#feat=promises), [async/await](https://caniuse.com/#feat=async-functions), [import/export](https://caniuse.com/#feat=es6-module) 
