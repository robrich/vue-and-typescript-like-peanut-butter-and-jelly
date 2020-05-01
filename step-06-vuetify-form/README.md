Step 6: Vuetify Form (the problem)
==================================

We copied the [Vuetify form example](https://vuetifyjs.com/en/components/forms/) into place, and we hit our first TypeScript snag.  The wonderful and annoying thing is when we `npm run serve`, the compiled JavaScript runs just fine.  But we see some errors in the compiler.  TypeScript knows what `this.$refs.form` is, but doesn't know that it has methods on it like `.validate()` and `.reset()`.
