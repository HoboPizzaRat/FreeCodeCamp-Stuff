function maskEmail(email){
  let atIndex = email.indexOf("@");
  let masked = email.slice(0,1)+"*".repeat(atIndex-2)+email.slice(atIndex-1);
  return masked
}

let email = "kakkakurva@gmail.com"
console.log(maskEmail(email));
