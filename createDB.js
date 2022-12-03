var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
	try {
		await client.connect();
		var database = client.db("keser");
		database.dropDatabase()
		database = client.db("keser");
		const products = database.collection("products");
		const result = await products.insertOne({name:"Брелок"});
		console.log(`${result} documents were inserted`);
	} finally {
		await client.close();
	}
}
run()