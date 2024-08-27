import {differenceInSeconds} from "date-fns";
import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    name:"question",
    message:"Please enter the time in seconds less than 60:",
    type:"number",
    validate:(input)=>{
        if(isNaN(input)){
            return "You have not entered time in number";
    }
    else if(input>60){
        return "You have entered seconds more than 60!"
    }
    else {
        return true;
    }
    }
    }])
let userInput = answer.question;
function startTimer(val:number){
const initTime =new Date().setSeconds(new Date().getSeconds()+ val);
const initialTime = new Date(initTime);

  setInterval((()=>{
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(initialTime,currentTime);
 if(timeDiff <= 0){
    console.log("Timer has expired");
    process.exit();
   } 
    const min = Math.floor((timeDiff%(3600*24))/3600);
    const sec = Math.floor(timeDiff%60);
    console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
 }),1000);
 }

startTimer(userInput);