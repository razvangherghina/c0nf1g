import config from 'dotenv/config'
config('.env.secrets')
const {GLOBAL, SPEFIC} = process.env


const envKeys = await getSM(GLOBAL, SPEFIC) 
writeFS(envKeys) 

// .env
console.log('---prebuild')