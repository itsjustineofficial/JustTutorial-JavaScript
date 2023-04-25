const quizData = [
    {
        question: "1. What does JS stand for?",
        a: "JavaScript",
        b: "Just Saying",
        c: "Joint Service ",
        d: "Just Started",
        correct: "a",
    },
    {
        question: "2. Who developed JavaScript? ",
        a: "Microsoft",
        b: "Apple",
        c: "Google",
        d: "Netscape",
        correct: "d",
    },
    {
        question: "3. What is JavaScript primarily used for?",
        a: "Styling web pages",
        b: "Adding interactivity to web pages ",
        c: "Sending emails",
        d: "Making phone calls ",
        correct: "b",
    },
    {
        question: "4. What is the file extension for a JavaScript file? ",
        a: ".html",
        b: ".css",
        c: ".js",
        d: ".php",
        correct: "c",
    },
    {
        question: "5. Which of the following is NOT a data type in JavaScript?",
        a: "Boolean",
        b: "String",
        c: "Array",
        d: "Table",
        correct: "d",
    },
    {
        question: "6. What is the correct syntax for a single-line comment in JavaScript?",
        a: "// This is a comment ",
        b: "<!-- This is a comment -->",
        c: "** This is a comment **",
        d: "~~ This is a comment ~~ ",
        correct: "a",
    },
    {
        question: "7. What is the keyword used to declare a variable in JavaScript? ",
        a: "var",
        b: "let",
        c: "const ",
        d: "all of the above   ",
        correct: "d",
    },
    {
        question: "8. Which of the following is NOT a valid way to declare a variable in JavaScript?",
        a: "var x = 5; ",
        b: "let y = 10; ",
        c: "const z; ",
        d: "const a = []; ",
        correct: "c",
    },
    {
        question: "9. What is the correct syntax for a function in JavaScript?",
        a: "function myFunction() {}",
        b: "myFunction() {} ",
        c: "function() myFunction {} ",
        d: "myFunction {} ",
        correct: "a",
    },
    {
        question: "10. What is the purpose of the return statement in a function? ",
        a: "To declare a variable ",
        b: "To end the function and return a value ",
        c: "To start the function ",
        d: "To add comments to the function",
        correct: "b",
    },
    {
        question: "11. What is the difference between == and === in JavaScript?",
        a: "There is no difference ",
        b: "== checks value and type, while === checks value only ",
        c: "=== checks value and type, while == checks value only",
        d: "== and === are not valid operators in JavaScript ",
        correct: "c",
    },
    {
        question: "12. What is the purpose of the if statement in JavaScript?",
        a:"To loop through code ",
        b: "To declare a variable",
        c: "To execute code if a condition is true ",
        d: "To return a value from a function ",
        correct: "c",
    },
    {
        question: "13. What is the purpose of the else statement in JavaScript?",
        a: "To execute code if a condition is false ",
        b: "To declare a variable ",
        c: "To declare a variable ",
        d: "To return a value from a function",
        correct: "a",
    },
    {
        question: "14. What is the purpose of the while loop in JavaScript? ",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To return a value from a function ",
        correct: "b",
    },
    {
        question: "15. What is the purpose of the for loop in JavaScript?",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To return a value from a function",
        correct: "a",
    },
    {
        question: "16. What is the purpose of the switch statement in JavaScript? ",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To select one of many code blocks to execute",
        correct: "d",
    },
    {
        question: "17. Which of the following is NOT a comparison operator in JavaScript? ",
        a: "<",
        b: ">",
        c: "<>",
        d: "<=",
        correct: "c",
    },
    {
        question: "18. What is the purpose of the && operator in JavaScript?",
        a: "Logical OR ",
        b: "Logical NOT ",
        c: "Logical AND ",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "19. What is the purpose of the || operator in JavaScript? ",
        a: "Logical OR ",
        b: "Logical NOT ",
        c: "Logical AND ",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "20. Which of the following is NOT a JavaScript framework or library? ",
        a: "React",
        b: "Angular",
        c: "Vue",
        d: "JavaFx",
        correct: "d",
    },
    {
        question: "21. Which of the following is NOT a built-in object in JavaScript?",
        a: "Math",
        b: "Date",
        c: "Array",
        d: "StringLenght",
        correct: "d",
    },
    {
        question: "22. What is the purpose of the this keyword in JavaScript? ",
        a: "To refer to the current object ",
        b: "To declare a variable",
        c: "To start a function ",
        d: "To return a value from a function",
        correct: "a",
    },
    {
        question: "23. What is the purpose of the new keyword in JavaScript? ",
        a: "To declare a variable",
        b: "To start a function ",
        c: "create a new variable",
        d: "To return a value from a function",
        correct: "b",
    },
    {
        question: "24. Which of the following is NOT a valid JavaScript event? ",
        a: "click",
        b: "hover",
        c: "type",
        d: "submit",
        correct: "c",
    },
    {
        question: "25. What is the purpose of the addEventListener method in JavaScript? ",
        a: "To add a new event to an element ",
        b: "To remove an event from an element ",
        c: "To change the style of an element ",
        d: "To add a new element to the DOM",
        correct: "a",
    },
    {
        question: "26. Which of the following is NOT a valid way to access an element in JavaScript?",
        a: "document.getElementById()",
        b: "document.querySelector()",
        c: "document.getElementByClass() ",
        d: "document.getElementsByTagName()",
        correct: "c",
    },
    {
        question: "27. What is the purpose of the innerHTML property in JavaScript?  ",
        a: "To get the text content of an element ",
        b: "To set the text content of an element  ",
        c: "To get the HTML content of an element ",
        d: "To set the HTML content of an element",
        correct: "d",
    },
    {
        question: "28. What is the purpose of the appendChild method in JavaScript? ",
        a: "To add a new element to the DOM ",
        b: "To remove an element from the DOM",
        c: "To change the style of an element ",
        d: "To add a new attribute to an element",
        correct: "a",
    },
    {
        question: "29. Which of the following is NOT a valid way to create a new element in JavaScript? ",
        a: "document.createElement()",
        b: "document.createTextNode() ",
        c: "document.createHTML() ",
        d: "document.createAttribute()",
        correct: "c",
    },
    {
        question: "30. What is the purpose of the getAttribute method in JavaScript?",
        a: "To get the value of an attribute ",
        b: "To set the value of an attribute",
        c: "To add a new attribute to an element",
        d: "To remove an attribute from an element",
        correct: "a",
    },
    {
        question: "31. Which of the following is NOT a valid way to remove an element from the DOM in JavaScript?",
        a: "element.remove() ",
        b: "element.parentNode.removeChild(element)  ",
        c: "document.removeChild(element)  ",
        d: "element.delete()",
        correct: "d",
    },
    {
        question: "32. What is the purpose of the querySelectorAll method in JavaScript?",
        a: "To select the first element that matches a CSS selector",
        b: "To select all elements that match a CSS selector ",
        c: "To select the parent element of an element",
        d: "To select the child elements of an element",
        correct: "b",
    },
    {
        question: "33. What is the purpose of the classList property in JavaScript? ",
        a: "To get a list of all classes on an element ",
        b: "To add a new class to an element ",
        c: "To remove a class from an element ",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "34. Which of the following is NOT a valid way to add a CSS class to an element in JavaScript? ",
        a: "element.className = new-class",
        b: "element.classList.add(new-class); ",
        c: "element.setAttribute(class, new-class);",
        d: "element.addClass(new-class);",
        correct: "d",
    },
    {
        question: "35. What is the purpose of the setTimeout method in JavaScript? ",
        a: "To execute a function after a specified amount of time",
        b: " To start a function",
        c: "To stop a function ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "36. What is the purpose of the setInterval method in JavaScript? ",
        a: "To execute a function repeatedly at a specified interval ",
        b: " To start a function",
        c: "To stop a function ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "37. What is the purpose of the clearTimeout method in JavaScript? ",
        a: "To stop a function scheduled with setTimeout",
        b: "To start a function ",
        c: "To execute a function after a specified amount of time ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "38. What is the purpose of the clearInterval method in JavaScript?",
        a: "To stop a function scheduled with setInterval",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "39. What is the purpose of the JSON.stringify method in JavaScript ",
        a: "To convert a JavaScript object to a JSON string ",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "40. What is the purpose of the JSON.parse method in JavaScript? ",
        a: "To convert a JSON string to a JavaScript object",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "41. What is the purpose of the for loop in JavaScript?",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To return a value from a function",
        correct: "a",
    },
    {
        question: "42. What is the purpose of the switch statement in JavaScript? ",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To select one of many code blocks to execute",
        correct: "d",
    },
    {
        question: "43. Which of the following is NOT a comparison operator in JavaScript? ",
        a: "<",
        b: ">",
        c: "<>",
        d: "<=",
        correct: "c",
    },
    {
        question: "44. What is the purpose of the && operator in JavaScript?",
        a: "Logical OR ",
        b: "Logical NOT ",
        c: "Logical AND ",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "45. What is the purpose of the || operator in JavaScript? ",
        a: "Logical OR ",
        b: "Logical NOT ",
        c: "Logical AND ",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "46. Which of the following is NOT a JavaScript framework or library? ",
        a: "React",
        b: "Angular",
        c: "Vue",
        d: "JavaFx",
        correct: "d",
    },
    {
        question: "47. Which of the following is NOT a built-in object in JavaScript?",
        a: "Math",
        b: "Date",
        c: "Array",
        d: "StringLenght",
        correct: "d",
    },
    {
        question: "48. Which of the following is NOT a valid way to declare a variable in JavaScript? ",
        a: "var x = 10;",
        b: "let y = 20; ",
        c: "const z = 30; ",
        d: "int w = 40;",
        correct: "d",
    },
    {
        question: "49. Which of the following is NOT a valid JavaScript event? ",
        a: "click",
        b: "hover",
        c: "type",
        d: "submit",
        correct: "c",
    },
    {
        question: "50. What is the purpose of the addEventListener method in JavaScript? ",
        a: "To add a new event to an element ",
        b: "To remove an event from an element ",
        c: "To change the style of an element ",
        d: "To add a new element to the DOM",
        correct: "a",
    },
    {
        question: "51. Which of the following is NOT a valid way to access an element in JavaScript?",
        a: "document.getElementById()",
        b: "document.querySelector()",
        c: "document.getElementByClass() ",
        d: "document.getElementsByTagName()",
        correct: "c",
    },
    {
        question: "52. What is the purpose of the innerHTML property in JavaScript?  ",
        a: "To get the text content of an element ",
        b: "To set the text content of an element  ",
        c: "To get the HTML content of an element ",
        d: "To set the HTML content of an element",
        correct: "d",
    },
    {
        question: "53. What is the purpose of the appendChild method in JavaScript? ",
        a: "To add a new element to the DOM ",
        b: "To remove an element from the DOM",
        c: "To change the style of an element ",
        d: "To add a new attribute to an element",
        correct: "a",
    },
    {
        question: "54. Which of the following is NOT a valid way to create a new element in JavaScript? ",
        a: "document.createElement()",
        b: "document.createTextNode() ",
        c: "document.createHTML() ",
        d: "document.createAttribute()",
        correct: "c",
    },
    {
        question: "55. What is the purpose of the getAttribute method in JavaScript?",
        a: "To get the value of an attribute ",
        b: "To set the value of an attribute",
        c: "To add a new attribute to an element",
        d: "To remove an attribute from an element",
        correct: "a",
    },
    {
        question: "56. Which of the following is NOT a valid way to remove an element from the DOM in JavaScript?",
        a: "element.remove() ",
        b: "element.parentNode.removeChild(element)  ",
        c: "document.removeChild(element)  ",
        d: "element.delete()",
        correct: "d",
    },
    {
        question: "57. What is the purpose of the slice method in JavaScript? ",
        a: "To remove elements from an array",
        b: "To add elements to an array ",
        c: "To create a new array from a portion of an existing array ",
        d: "To join two or more arrays together",
        correct: "c",
    },
    {
        question: "58. What is the purpose of the splice method in JavaScript? ",
        a: "To remove elements from an array",
        b: "To add elements to an array ",
        c: "To create a new array from a portion of an existing array ",
        d: "To join two or more arrays together",
        correct: "a",
    },
    {
        question: "59. What is the purpose of the concat method in JavaScript? ",
        a: "To remove elements from an array",
        b: "To add elements to an array ",
        c: "To create a new array from a portion of an existing array ",
        d: "To join two or more arrays together",
        correct: "d",
    },
    {
        question: "60. What is the purpose of the join method in JavaScript? ",
        a: "To remove elements from an array",
        b: "To join the elements of an array together into a string",
        c: "To create a new array from a portion of an existing array ",
        d: "To join two or more arrays together",
        correct: "b",
    },
    {
        question: "61. What is the purpose of the getAttribute method in JavaScript?",
        a: "To get the value of an attribute ",
        b: "To set the value of an attribute",
        c: "To add a new attribute to an element",
        d: "To remove an attribute from an element",
        correct: "a",
    },
    {
        question: "62. Which of the following is NOT a valid way to remove an element from the DOM in JavaScript?",
        a: "element.remove() ",
        b: "element.parentNode.removeChild(element)  ",
        c: "document.removeChild(element)  ",
        d: "element.delete()",
        correct: "d",
    },
    {
        question: "63. What is the purpose of the querySelectorAll method in JavaScript?",
        a: "To select the first element that matches a CSS selector",
        b: "To select all elements that match a CSS selector ",
        c: "To select the parent element of an element",
        d: "To select the child elements of an element",
        correct: "b",
    },
    {
        question: "64. What is the purpose of the classList property in JavaScript? ",
        a: "To get a list of all classes on an element ",
        b: "To add a new class to an element ",
        c: "To remove a class from an element ",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "65. Which of the following is NOT a valid way to add a CSS class to an element in JavaScript? ",
        a: "element.className = new-class",
        b: "element.classList.add(new-class); ",
        c: "element.setAttribute(class, new-class);",
        d: "element.addClass(new-class);",
        correct: "d",
    },
    {
        question: "66. What is the purpose of the setTimeout method in JavaScript? ",
        a: "To execute a function after a specified amount of time",
        b: " To start a function",
        c: "To stop a function ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "67. What is the purpose of the setInterval method in JavaScript? ",
        a: "To execute a function repeatedly at a specified interval ",
        b: " To start a function",
        c: "To stop a function ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "68. What is the purpose of the clearTimeout method in JavaScript? ",
        a: "To stop a function scheduled with setTimeout",
        b: "To start a function ",
        c: "To execute a function after a specified amount of time ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "69. What is the purpose of the clearInterval method in JavaScript?",
        a: "To stop a function scheduled with setInterval",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "70. What is the purpose of the JSON.stringify method in JavaScript ",
        a: "To convert a JavaScript object to a JSON string ",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "71. What is the purpose of the JSON.parse method in JavaScript? ",
        a: "To convert a JSON string to a JavaScript object",
        b: "To start a function ",
        c: "To execute a function repeatedly at a specified interval ",
        d: "To get the current time",
        correct: "a",
    },
    {
        question: "72. What is the purpose of the if statement in JavaScript?",
        a:"To loop through code ",
        b: "To declare a variable",
        c: "To execute code if a condition is true ",
        d: "To return a value from a function ",
        correct: "c",
    },
    {
        question: "73. What is the purpose of the else statement in JavaScript?",
        a: "To execute code if a condition is false ",
        b: "To declare a variable ",
        c: "To declare a variable ",
        d: "To return a value from a function",
        correct: "a",
    },
    {
        question: "74. What is the purpose of the while loop in JavaScript? ",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To return a value from a function ",
        correct: "b",
    },
    {
        question: "75. What is the purpose of the for loop in JavaScript?",
        a: "To execute code a specific number of times ",
        b: "To execute code while a condition is true ",
        c: "To declare a variable ",
        d: "To return a value from a function",
        correct: "a",
    },
   
    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        if (score == 75){
            quiz.innerHTML = `
            <h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 100% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 74 || score == 73){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 99% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 72){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 98% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 71 || score == 70){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 97% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 69){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 96% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 68 || score == 67){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 95% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 66){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 94% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 65 || score == 64){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 93% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 63){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 92% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 62 || score == 61){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 91% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 60){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 90% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 59 || score == 58){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 89% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 57){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 88% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 56 || score == 55){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 87% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 54){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 86% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 53 || score == 52){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 85% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 51){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 84% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 50 || score == 49){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 83% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 48){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 82% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 47 || score == 48){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 81% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 45){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 80% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 44 || score == 43){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 79% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 42){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 78% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 41 || score == 40){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 77% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 39 || score == 38){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 76% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score == 37 || score == 36 || score == 35){
            quiz.innerHTML = `
            <br><h1><font style="color: green">CONGRATULATIONS!!</font></h1>
           <h1> ${score} = 75% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 34 && score >= 32){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 74% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 31 && score >= 29){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 73% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 28 && score >= 25){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 72% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 24 && score >= 21){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 71% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 20 && score >= 17){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 70% </h1>
           <br><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 16 && score >= 14){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 69% </h1>
           <br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 13 && score >= 10){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 68% </h1>
           <br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 9 && score >= 6){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 67% </h1><br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 5 && score >= 2){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 66% </h1>
           <br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
        else  if (score <= 1 && score >= 0){
            quiz.innerHTML = `
            <br><h1><font style="color: red">TRY IT AGAIN!!</font></h1>
           <h1> ${score} = 65% </h1>
           <br>
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()" id ="submit">Reload</button>
            `
        }
       }
    }
})