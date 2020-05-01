Step 10: A Random JavaScript Component (the problem)
====================================================

Vue has a really great ecosystem.  Head out to [vue-awesome](https://github.com/vuejs/awesome-vue) and look through the curated list of awesome components and plugins for Vue.  This is hardly an exhaustive list, but this is a great place to start when looking for just the right thing to add.

I grabbed a random component -- [vue-parallax-js](https://github.com/jsnanigans/vue-parallax-js).  This component wasn't written with TypeScript in mind, but has a nice UMD setup that works with great with [unpkg](https://unpkg.com/vue-parallax-js) just as easily as it works with [`npm install vue-parallax-js`](https://npmjs.org/vue-parallax-js).  Let's install it, and using the instructions from https://github.com/jsnanigans/vue-parallax-js, wire it up.

When we launch `npm run serve`, we see the fail.  Uh-oh.  It doesn't have type declarations, and TypeScript is rather perturbed about it.
