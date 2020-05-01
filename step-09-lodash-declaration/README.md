Step 9: Build a Type Declaration File
=====================================

Here's our next strategy for adding types to non-TypeScript files.  We can build a `.d.ts` file to tell TypeScript how this portion of lodash works.  VS Code immediately recognizes it, and starts validating our random function.  This is a great introduction to how type declaration files work.  It would be a lot of work to do this for every library.  [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) is a GitHub repo of type definitions, all published to NPM in the @types org.  There's a [lodash types](https://npmjs.org/@types/lodash) package we can pull in with `npm install --save-dev @types/lodash` to get the full library's type details.
