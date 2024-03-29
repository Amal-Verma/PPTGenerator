require('dotenv').config();

const express = require('express');
const cors = require('cors');

const generate = require('./components/generateText').generate;

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["https://ppt-generator-client.vercel.app" ],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.post('/generate', generate)

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
