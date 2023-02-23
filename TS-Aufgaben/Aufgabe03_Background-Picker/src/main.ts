// Setup für den lokalen server. Hier muss nichts angepasst werden.

import {Request, Response} from "express";
const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

app.use(express.static('src'))

app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
})
