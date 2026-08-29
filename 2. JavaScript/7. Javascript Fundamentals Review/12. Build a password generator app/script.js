function generatePassword(pw_len){
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let output = "";
  for(let i = 0; i < pw_len; i++){
    let i = Math.floor(Math.random()*chars.length);
    output += chars[i];
  }
  return output;
}
let password = generatePassword(5);
console.log(`Generated password: ${password}`);