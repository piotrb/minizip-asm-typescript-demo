# Zip Demo

### Running:

```
yarn install
yarn run start
```

### Notes

minizip-asm.js doesn't have its own type definitions, to run it properly you need to
create the folder structure around loading custom types.

This is accomplished by setting `typeRoots` inside `tsconfig.json` as in this example.

And then putting in the types folder from this example in place.
