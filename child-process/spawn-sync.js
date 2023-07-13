'use strict'

const { spawnSync } = require('child_process')

// Contains info about the process that was spawned
{
  const result = spawnSync(
    process.execPath,
    ['-e', `console.log('subprocess stdio output')`]
  )
  console.log(result)
}

// If the process exits with a non-zero exit code,
// the error property will be populated with the error code and the output
// will be populated with the contents of stderr.
{
  const result = spawnSync(process.execPath, [`-e`, `process.exit(1)`])
  console.log(result)
}