import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://NewUser:NewUser@cluster.v58ya9y.mongodb.net/db-contacts";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export { connectToDatabase };
