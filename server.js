require("dotenv").config();
const express = require("express");
const fs = require('fs')
const cors = require("cors");
const app = express();
const PORT = process.env.PORT||8000;
const { v4: uuidv4 } = require('uuid');

let readFile = (filename) => JSON.parse(fs.readFileSync(filename));
let writeFile = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data));

let questions = readFile('data/data.json');

app.use(cors({ // To allow any origin
  origin: '*'
}));
app.use(express.json()); // To read json data in request body
// import model
const taskModel = require("./models/quiz_model.js");
// Define static route
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log("App run on http://localhost:"+PORT);
});

// read
app.get("/api/questions", (req,res)=>{
  let questions = readFile('data/data.json');
  res.send(questions);
})

// add questions
app.post('/api/questions', (req, res) => {
  let questions = readFile('data/data.json');
  let titleQuestions = req.body.titleQuestion;
  console.log(titleQuestions);
  let answer = req.body.answer;
  console.log(answer);
  let correction = req.body.correction;
  console.log(correction);
  if (titleQuestions !== undefined && answer !== undefined && correction !== undefined) {

    let question = {
      'id' : uuidv4(),
      'titleQuestion': titleQuestions,
      'answer': answer,
      'correction':correction
    };
    questions.push(question);
    writeFile('./data/data.json', questions);
    res.status(200).send({"message" : 'Question added successfully 😍'});
} else {
  res.status(404).send({"message" : 'All field required 😝'});
}
})

// delete question
app.delete('/api/questions/:id', (req, res) => {
  let questions = readFile('data/data.json');
  let id = req.params.id
  let index = questions.findIndex(titleQuestion => titleQuestion.id === id)
  if (index !== -1) {
    questions.splice(index, 1)
    writeFile('data/data.json', questions);
    res.status(200).send({"message" : 'Question has deleted successfully 😊'})
  } else {
   res.status(404).send({"message" : 'Question id not found 😓!'})
  }
})

// edit question 
app.patch('/api/questions/:id', (req, res) => {
  let id = req.params.id;
  let index = questions.findIndex(titleQuestion => titleQuestion.id === id);
  if (index !== -1) {
    let question = questions[index];
    if (req.body.titleQuestions !== undefined) {
      question.name = req.body.question;
    }
    if (req.body.answer !== undefined) {
      question.answer = req.body.answers;
    }
    if (req.body.correction !== undefined) {
      question.correction = req.body.correction;
    }
    res.status(200).send({"message" : 'Question updated successfully 😊'});
  } else {
    res.status(404).send({"message" : 'Question id not found 😎'});
  }
})


