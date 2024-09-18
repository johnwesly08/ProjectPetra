const express = require('express');
const app = express();
const cors = require('cors');
const appRouters = require('./router/appRouter');

require('dotenv').config();
const { PORT } = process.env;

// Json and Cors (http and header handlers)
app.use(express.json({extended: false}));
app.use(cors({origin: "*", Credential: true, methods: ["GET", "POST", "PUT", "DELETE"]}));

// Server Listening
app.listen(PORT, () => {
    console.log(`The Server was Listening\nhttp://localhost:${PORT}`);
});

app.use("/api", appRouters);