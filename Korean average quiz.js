//Question bank
var questionBank= [
    {
        question : ' How is "생일 축하해요" (saengil chukhahae-yo) pronounced?',
        option : ['saeng-eel chuk-ha-hey-yo','sang-il chukhahae-yo','sang-eel-chewka-hae-yo','saengil chukhahae-yo'],
        answer : 'sang-eel-chewka-hae-yo'
    },
    {
        question : 'It is commonly used as a greeting to wish someone a pleasant start to the day?',
        option : ['Goodbye','Happy Birthday','Goodluck','Good morning'],
        answer : 'Good morning'
    },
    {
        question : 'What is the translation of "행운을 빕니다" (haenguneul bibnida)?',
        option : ['Goodbye','Happy Birthday','Goodluck','Thank you'],
        answer : 'Goodluck'
    },
    {
        question : 'How do you pronounce "좋은 저녁이에요" (joheun jeonyeog-ieyo)?',
        option : ['jo-heun jeon-yeog-ee-eh-yo','jo-he-un jeon-yeo-g-ee-eh-yo',' jo-heun jeonyeog-ieyo','jo-heun jeon-yuk-ee-yo'],
        answer : 'jo-heun jeon-yeog-ee-eh-yo'
    },
    {
        question : 'It is used to express joy and celebration for achievement of someone or success. ',
        option : ['Goodbye','Congratulations','Goodluck','Goodmorning'],
        answer : 'Congratulations'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);

     // Check if the user has scored 5/5 and show or hide the "Continue" button
if (score === 5) {
    document.getElementById('continueButton').style.display = 'block';
} else {
    document.getElementById('continueButton').style.display = 'none';
}
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();