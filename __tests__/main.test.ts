import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('test runs', async () => {
  process.env['INPUT_INPUT'] = 'test/data/sample-nb-1.ipynb'
  process.env['INPUT_OUTPUT'] = 'test/build/sample-nb-1-out.ipynb'

  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }

  console.log(cp.execSync(`node ${ip}`, options).toString())
})

// test('wait 500 ms', async () => {
//   const start = new Date()
//   const end = new Date()
//   var delta = Math.abs(end.getTime() - start.getTime())
//   expect(delta).toBeGreaterThan(450)
// })

// // shows how the runner will run a javascript action with env / stdout protocol
// test('test runs', () => {
//   process.env['INPUT_MILLISECONDS'] = '500'
//   const ip = path.join(__dirname, '..', 'lib', 'main.js')
//   const options: cp.ExecSyncOptions = {
//     env: process.env
//   }
//   console.log(cp.execSync(`node ${ip}`, options).toString())
// })
