// questionPaperGenerator.js
const questionStore = require('./questionStore');

function filterQuestionsByDifficulty(difficulty) {
    return questionStore.filter(question => question.difficulty.toLowerCase() === difficulty.toLowerCase());
}

function getQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];

    for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
        const questions = filterQuestionsByDifficulty(difficulty);
        const questionCount = Math.ceil((percentage / 100) * totalMarks);

        console.log(`Difficulty: ${difficulty}, Questions: ${questions.length}, Required: ${questionCount}`);

        questionPaper.push(...questions.slice(0, questionCount));
    }

    return questionPaper;
}

module.exports = {
    filterQuestionsByDifficulty,
    getQuestionPaper
};