Vue.js and TypeSript: Working Together like Peanut Butter and Jelly
===================================================================

Here's the companion code to the talk [Vue.js and TypeScript: Working Together like Peanut Butter and Jelly](https://robrich.org/slides/vue-and-typescript-like-peanut-butter-and-jelly/#/)

Each step in this codebase represents a step of exploration / improvement for this Vue 2 app.

Noteable discoveries when including JavaScript code into a TypeScript project like this:

- Step 7: exporting interfaces to shim in understanding
- Step 9: creating type declaration file (`.d.ts`)
- Step 11: generating type declaration file


Strategy priority
-----------------

When including JavaScript in TypeScript, here's a prioritized list of strategies:

1. Use libraries built in TypeScript
2. Install `@types/your-lib` to get their type declaration file
3. Hand-craft a declaration file (`.d.ts`)
4. Generate declaration file to get started, then tune to fit
   - `mv file.js file.ts; tsc --declaration file.ts`
5. Use any (this is often a bad idea)
   - `const ok = bad as any;`
6. Ignore it (this is often a bad idea)
   - `// @ts-ignore`
