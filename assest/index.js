

const usableCharactor =[]
const capitalCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const specialCase =['@','#','$','%','&','*','+']
const numeric = ['0','1','2','3','4','5','6','7','8','9']
const generatePassword = []





const collectWord = function(arr){
    for(let i = 0;i<arr.length; i++){
usableCharactor.push(arr[i]);

    }
}

const generateBtn = document.getElementById('generate');


function getPasswordLength(){

let passwordlength = prompt("select password lenth between min 8 to max 128");
if (passwordlength < 8 || passwordlength > 128  ){
alert("please choose ,between min 8 to max 128");
passwordlength = prompt("select password lenth between min 8 to max 128");
console.log(passwordlength)
};
return passwordlength;
}


function alphabets(){

const  passwordLength = getPasswordLength();
const lower =confirm("do you wanna select Lower case ?")

if (lower){
    collectWord(lowerCase);
};

const capital = confirm("do you wanna select Capital case ?")
if (capital){

    collectWord(capitalCase)
};
const number = confirm("do you wanna select number ?")
if (number){
    collectWord(numeric)
};
const special = confirm("do you wanna select special case ?")
if (special){
    collectWord(specialCase)
};
console.log(usableCharactor)
password= [];

for(let i=0; i<passwordLength; i++){
    
var index = Math.floor(Math.random() * usableCharactor.length);
password.push(usableCharactor[index]);
};


password  = password.join("");

document.getElementById('password').value = password;


generateBtn.addEventListener('click', generate);

}









alphabets();











