
function generate(){

var numeric ="1234567890".split()
var specialCharactor="@#$%&*+".split()
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split()
var userpasswordOptions =['numeric','capitalCase','lowerCase','specialCharactor'];   

// var capitalCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()





var passlength = parseInt(
prompt("how many charactor  u want ")

); 
if (passlength < 8 ||passlength > 128){

  alert("please provide number lenth max  128 and min 8")

}
if (passlength > 8 ||passlength < 128){

alert(" now choose alphabets")


} 
var capital = prompt("write Capital case ")
 if (capital==true)

 alert("good one ")

 else if (capital!==true){
  alert("please write capital")


 }



//  else  (capital&&!(capitalCase));{
 
 
//  alert("please write capital")}
 
 
//  return;

}generate();