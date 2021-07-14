const { Pool, Client } = require('pg')

const client = new Client({
  connectionString:
    'dbname=deb1k8lde6qm9s host=ec2-3-224-7-166.compute-1.amazonaws.com port=5432 user=zbkkqbkrgwzmjh password=d7841d07398ea1b553712cb493eb8dc6450995ea701f4ec0ba864cf0ea581332 sslmode=require',
})

client.connect()
client
  .query('SELECT table_schema,table_name FROM information_schema.tables;')
  .then((result) => console.log(result))
  .catch((e) => console.error(e.stack))
  .then(() => client.end())
