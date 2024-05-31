import mongoose from "mongoose";

const DB_URI = "mongodb+srv://svitlanaoseichuk:Oxe19UoqAZ3IiyVe@cluster0.hjs5upo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
    try {
        await mongoose.connect(DB_URI);

        console.log("database connection successfully")
    } catch(error) {
         console.error("database connection failure:", error)
    } finally {
        await mongoose.disconnect();
    }
    
}

run().catch(console.error);