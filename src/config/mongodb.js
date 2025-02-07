import { MongoClient, ServerApiVersion } from 'mongodb';

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGOBD_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
    if (!trelloDatabaseInstance) {
        throw new Error('Call CONNECT_DB first')
    }

    return trelloDatabaseInstance
}