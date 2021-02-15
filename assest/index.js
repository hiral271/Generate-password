
//defining arrays 
const usableCharactor =[]
const capitalCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const specialCase =['@','#','$','%','&','*','+']
const numeric = ['0','1','2','3','4','5','6','7','8','9']
const Password = []
 var generateBtn =document.getElementById('generate')



//user choosen  password cases to loop 
const collectWord = function(arr){
    for(let i = 0;i<arr.length; i++){
usableCharactor.push(arr[i]);

    }
}



//prompt will pop up on screen to choose charactors 
function getPasswordLength(){

let passwordlength = prompt("select password lenth between min 8 to max 128");
if (passwordlength < 8 || passwordlength > 128  ){
alert("please choose ,between min 8 to max 128");
passwordlength = prompt("select password lenth between min 8 to max 128");
console.log(passwordlength)
};
return passwordlength;
}

// function for make user choice from diffrent cases
function alphabets(){

const  passwordLength = getPasswordLength();
const lower =confirm("do you wanna select Lower case ?")

//let user to  choose lowercase
if (lower){
    collectWord(lowerCase);
};

//let user to  choose capitalcase
const capital = confirm("do you wanna select Capital case ?")
if (capital){

    collectWord(capitalCase)
};

//let user to  choose numeric
const number = confirm("do you wanna select number ?")
if (number){
    collectWord(numeric)
};

//let user to  choose specialcase
const special = confirm("do you wanna select special case ?")
if (special){
    collectWord(specialCase)
};


//password is generate base on user's choice
console.log(usableCharactor)
password= [];


//create loop to choose passowrd charactors
for(let i=0; i<passwordLength; i++){
    
var index = Math.floor(Math.random() * usableCharactor.length);
password.push(usableCharactor[index]);
};

//write passowrd to screen 
password  = password.join("");

document.getElementById('password').value = password;



}
generateBtn.addEventListener('click',function(){


    alphabets()


})


















