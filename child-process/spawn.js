'use strict'
const { spawn } = require('child_process')

// The difference of spawn against the other methods like exec, execSync, spawnSync is that
// spawn will keep streaming the output of the child process to the parent process
// until the child process exits. It does not buffer the output like execSync does.

{
  const sp = spawn(
    process.execPath,
    [`-e`, `console.log('subprocess stdio output')`]
  )
  
  console.log('pid is', sp.pid)

  sp.stdout.pipe(process.stdout)

  sp.on('close', (status) => {
    console.log('exit status was', status)
  })
}

{
  const sp = spawn(
    process.execPath,
    [`-e`, `process.exit(1)`]
  )
  
  console.log('pid is', sp.pid)

  sp.stdout.pipe(process.stdout)

  sp.on('close', (status) => {
    console.log('exit status was', status)
  })
}