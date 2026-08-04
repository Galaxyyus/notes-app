import path from 'path';
import { fileURLToPath } from 'url';

import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
console.log('Connected to MongoDB successfully!!');

const notes = client.db("Keeper").collection("notes");

app.get("/", (req, res) => {
    res.status(200).sendFile("./public/index.html");
});

app.get("/notes", async (req, res) => {
    res.json(await notes.find().toArray());
});

app.post("/notes", async (req, res) => {
    try {
        const { title, text } = req.body;
        const result = await notes.insertOne({ title: title, text: text });

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

app.listen(process.env.PORT || 3000);