# Module System

## CJS

The `require` function returns the `module.exports` of a file.

Every single file, package, lib is called a module in Js.

## ESM

The primarily difference between CJS and ESM is that CJS imports the module syncronously and ESM assyncronously.

In NodeJS we can have even CJS and ESM files both together.

There's a Faux-ESM that is those that the syntax is pretty similar but at the end will be compiled to the CJS standard.

### Limitations of CJS

We cannot import a ESM file inside a CJS one using `require` you should do a non-recommended approach to do that, what is usually done is the usage of ESM file.

### Limitations of ESM

The import keyworks only works at the top level, they cannot be conditionally declared


#### Obs

If the module does not have a `default export` it cannot be imported as `import some from 'some.js'` because it will throw an error, the following can be done `import * as some from 'some.js'`.

If it has an `default export` and it is imported as `import * as some from 'some.js'`, this will have a `default` property assigned and pointing to the default export.
