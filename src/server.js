import express from 'express'
import {CONNECT_DB, GET_DB} from '~/config/mongodb'

const START_SERVER = async () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`I am running at ${ hostname }:${ port }/`)
  })

}

CONNECT_DB()
  .then(() =>{
    console.log('Connected to MongoDB')
  })
  .then(() => START_SERVER)
  .catch((error) => {
    console.error(error)
    process.exit(1)
  }