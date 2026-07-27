import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
console.log('Connected to MongoDB successfully!!');

const notes = client.db("Keeper").collection("notes");

app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.status(200).sendFile("./public/index.html")
})

app.get("/notes", async (req, res) => {
    res.json(await notes.find().toArray());
});

app.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body;
        const result = await notes.insertOne({ title: title, content: content });

        res.status(201).send(result.insertedId);
    } catch (err) {
        res.status(500).json({ error: "Failed to save note" });
    }
});

app.delete("/notes/:id", async (req, res) => {
    await notes.deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.sendStatus(204);
});

app.listen(process.env.PORT);