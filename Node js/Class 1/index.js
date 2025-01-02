import express from "express";
import cors from "cors";
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

const htmlPath = path.resolve("public", "index.html");
const folderPath = path.resolve("public");

app.listen("3000", () => {
    console.log('Server started on port: 3000')
});


app.use((req, res, next) => {
    console.log('inside middleware');
    const ranNum = Math.ceil(Math.random() * 100);
    if (ranNum % 2 === 0) {
        res.send(`This is even number: ${ranNum}`);
    }
    else {
        next();
    }
})

app.get("/", (req, res) => {
    console.log("Requst Received:", req.url);
    res.send("Hello World!");
});


app.get("/user", (req, res) => {
    console.log("User Request Receive", req.url);
    res.send("Hello User")
})


app.post("/writeFile", (req, res) => {
    console.log(req.body);
    const filePath = path.resolve(folderPath, req.body.fileName)
    fs.writeFile(filePath, req.body.fileContent, (error, success) => {
        if (error) {
            res.json({ error: error });
        }
        else {
            console.log(success, 'success')
            res.json({ message: "File written successfully." })
        }
    });
});


app.get("/readFile", (req, res) => {
    fs.readFile(htmlPath, (error, fileContent) => {
        if (error) {
            res.json({ error: error });
        }
        else {
            res.send(fileContent);
        }
    })
});