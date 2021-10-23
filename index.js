import 'dotenv/config'
const { XXX } = process.env
process.env =  { ...process.env, ...{ ANDREJA: 'test'} }
const { ANDREJA } = process.env
console.log('I am TEngine', ANDREJA, XXX)
const newEnvs = { ...process.env, ...{ ANDREJA: 'test'} }
export default newEnvs



// developers

import envs from '@timify/conft'

const { XXX } = envs