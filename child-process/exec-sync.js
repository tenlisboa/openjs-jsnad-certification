'use strict'
{
  const { execSync } = require('child_process')
  const output = execSync(
    `node -e "console.log('subprocess stdio output')"`
  )
  console.log(output.toString())
}

{
  const { execSync } = require('child_process')
  const output = execSync(
    `"${process.execPath}" -e "console.error('subprocess stdio output')"`
  )
  console.log(output.toString())
}

{
  const { execSync } = require('child_process')
  try {
    execSync(`"${process.execPath}" -e "process.exit(1)"`)
  } catch (err) {
    console.error('CAUGHT ERROR:', err)
  }
}

// The err.stderr corresponds to err.output[2] and err.stdout corresponds to err.output[1]
{
  const { execSync } = require('child_process')

  try {
    execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)
  } catch (err) {
    console.error('CAUGHT ERROR:', err)
  }
}