function getAverage(scores){
  let length = scores.length;
  let total = scores.reduce((add, red) => add + red, 0);
  return total / length;
}
function getGrade(studentScore){
  if(studentScore >= 0 && studentScore <= 59){
    return "F";
  }
  if(studentScore >= 60 && studentScore <= 69){
    return "D";
  }
  if(studentScore >= 70 && studentScore <= 79){
    return "C";
  }
  if(studentScore >= 80 && studentScore <= 89){
    return "B";
  }
  if(studentScore >= 90 &&  studentScore <= 99){
    return "A";
  }
  if(studentScore == 100){
    return "A+";
  }
  return undefined
}
function hasPassingGrade(score){
  return getGrade(score) != "F";
}
function studentMsg(scores, studentScore){
  let classAverage = getAverage(scores);
  let studentGrade = getGrade(studentScore);
  let isStudentPassing = hasPassingGrade(studentScore);
  if(isStudentPassing){
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`
  }else{
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`
  }
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(getGrade(100))
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
