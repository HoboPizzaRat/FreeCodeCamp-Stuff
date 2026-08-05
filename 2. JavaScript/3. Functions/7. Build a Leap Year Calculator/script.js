function isLeapYear(year){
  let isLeap = false;
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        isLeap = true;
      }
    }else{
      isLeap = true;
    }
  }
  if(isLeap){
    return `${year} is a leap year.`;
  }
  return `${year} is not a leap year.`;
}
let year = 1004
let result = isLeapYear(year);
console.log(result);
