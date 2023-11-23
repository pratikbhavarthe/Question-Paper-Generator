const express = require("express");
const bodyParser = require("body-parser");
// Removed unused questionStore variable
const {
    getQuestionPaper
} = require("./questionPaperGenerator");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/generateQuestionPaper", (req, res) => {
    const {
        totalMarks,
        difficultyDistribution
    } = req.body;
    const questionPaper = getQuestionPaper(totalMarks, difficultyDistribution);
    res.json(questionPaper);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
