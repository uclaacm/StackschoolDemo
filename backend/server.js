const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://nathanz:2eXoIF3xb5tMqEns@app.n7kcunu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to DB")).catch(console.error);

app.listen(3001, () => console.log("Server listening on port 3001"));