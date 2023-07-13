'use strict'

const { spawnSync } = require('child_process')
const { join } = require('path')

function exercise (myEnvVar) {
  return spawnSync(
    process.execPath,
    [join(__dirname, 'child.js')],
    {
      env: {
        MY_ENV_VAR: myEnvVar
      }
    }
  );
}

module.exports = exercise
