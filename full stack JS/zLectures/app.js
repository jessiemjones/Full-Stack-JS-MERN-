// NODE PACKAGE MANAGER
// 3rd party packages to make common processes quicker/easier

// in terminal, type:
// npm init -y
// npm install readline-sync

var ask = require("readline")

ask.question("What is your name?:")

response = true


while(!response){
    var response = ask.keyInYN("Should I keep asking this question?")
}


console.log(response)


