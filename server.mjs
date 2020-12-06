import express from 'express';
const app = express();

const newLocal = app.listen(5500, function () {
    console.log("server is running");
});