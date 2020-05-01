Step 11: Generate a Type Declaration File
=========================================

Reading through the source code, and looking at the TypeScript error message, it's difficult to infer what type we need for this component.  We could struggle with this for a long time, we could try to rewrite the component in TypeScript, or we could move on to a different component.  Let's press forward.

Here's our third strategy for getting type declarations.  We can [generate](https://stackoverflow.com/questions/18301898/generating-typescript-declaration-files-from-javascript) a TypeScript declaration file pretty easily.  This can likely get us started:

```sh
xcopy some.js some.ts
tsc --declaration some.ts
```

Now let's move it into place and adjust it to fit.
