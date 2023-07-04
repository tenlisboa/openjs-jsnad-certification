import { pathToFileURL } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// this is a way to use require inside a ESM module

console.log(
  `import 'pino'`,
  '=>',
  pathToFileURL(require.resolve('pino')).toString()
)

console.log(
  `import 'tap'`,
  '=>',
  pathToFileURL(require.resolve('tap')).toString()
)
