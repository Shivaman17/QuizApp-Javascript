const quizDB = [
    { 
        question: "Q1: A process is a _______.",
        a: "single thread of execution",
        b: "program in the execution",
        c: "program in the memory",
        d: "task",
        ans: "ans2"
    },
    
    {
        question: "Q2: What is smallest unit of the information?",
        a: "A bit",
        b: "A byte",
        c: "A block",
        d: "A nibble",
        ans: "ans1"
    
    
    },
    
    {
        question: "Q3:What is the decimal equivalent of the binary number 10111?",
        a: "21",
        b: "39",
        c: "42",
        d: "23",
        ans: "ans4"
    
    
    },
    
    {
        question: "Q4:How is the data stored on the diskette?",
        a: "Ink",
        b: "Laser bubbles",
        c: "Magnetism",
        d: "Circuits",
        ans: "ans3"
    
    },

    {
        question: "Q5:Which of the following is the extension of Notepad?",
        a: ".txt",
        b: ".xls",
        c: ".ppt",
        d: ".bmp",
        ans: "ans1"
    
    }

    
    
    ];
    
//     var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('count').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);


   // function Timer()
    //{
      //   alert("You are out of time!");
   // }

   var sec = 20;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! Answers locked:(");
    }
}
    
    const question = document.querySelector('.question');
    const option1 =  document.querySelector('#option1');
    const option2 =  document.querySelector('#option2');
    const option3 =  document.querySelector('#option3');
    const option4 =  document.querySelector('#option4');
    const submit =  document.querySelector('#submit');

    const answers = document.querySelectorAll('.answer'); 
    const show = document.querySelector('#show');
    
    let questionCount = 0;
    let score = 0;

    const loadQuestion = () => 
    {
        const questionList = quizDB[questionCount];
        question.innerHTML =  questionList.question;

        option1.innerHTML = questionList.a;
        option2.innerHTML = questionList.b;
        option3.innerHTML = questionList.c;
        option4.innerHTML = questionList.d;
    } 
    
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem)=> {
     if(curAnsElem.checked){
         answer = curAnsElem.id;
     } 
    
    });
   return answer;
    
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false ); 
}

submit.addEventListener('click',()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else {
        show.innerHTML = ` 
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onclick="location.reload()"> Play Again </button>
        `;
        show.classList.remove('showArea');
    }

});
   