const questions = [
  {
    category: "corn",
    question: "Am i gay?", 
    choices: ["Yes", "Definitely", "No"],
    answer: "Definitely"
  },
  {
    category: "corn",
    question: "Are You gay?", 
    choices: ["Yes", "Definitely", "No"],
    answer: "Definitely"
  },
  {
    category: "corn",
    question: "Is your aunt gay?", 
    choices: ["Yes", "Definitely", "No"],
    answer: "Yes"
  },
  {
    category: "food",
    question: "Do you like popcorn?", 
    choices: ["Yes", "Definitely", "No"],
    answer: "No"
  },
  {
    category: "food",
    question: "Am i a corn?", 
    choices: ["Yes", "Definitely", "No"],
    answer: "Definitely"
  }
];

function getRandomQuestion(questionArr){
  const index = Math.floor(Math.random() * questionArr.length);
  return questionArr[index];
}

function getRandomComputerChoice(choices){
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(questionObj, computerChoice){
  if(questionObj.answer === computerChoice){
    return "The computer's choice is correct!";
  }else{
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}