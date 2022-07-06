var userName = prompt("Please enter your name");
if (userName === "") {
alert("invaled")
}

var result= userName;
console.log(result);


var gender = prompt("Please enter your gender");
if (gender==="") {
alert("invaled")
}else
if(gender === "male"){
var result=(gender);
} else {
gender="female";
var result=(gender)
}

var result= gender;
console.log(result)

var age = prompt("please inter your age ");
if (age<=0){
    alert("invaled")

}else{
    var result=(age);

}
console.log(result);



var welcoming= confirm("wants to skip the welcoming message");


if(welcoming=true){
    alert("welcome")
}
else if (gender==="male"){
    alert("welcome-MR"+userName);
}else
    alert("welcome-Ms"+userName);

 var arr=[userName,gender,age]
console.log(arr);



//Ask the user to confirm if he wants to skip the welcoming message.
//Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation.
//Continue working on the styling of the project.