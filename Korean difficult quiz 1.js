//Question bank
var questionBank= [
    {
        question : 'How do you ask name of someone in Korean?',
        option : [' 어디 가세요? (eodi gaseyo?)','안녕하세요 (annyeonghaseyo)','제발 (jebal)','당신의 이름은 무엇인가요? (dangsin-ui ireumeun mueos-ingayo?)'],
        answer : '당신의 이름은 무엇인가요? (dangsin-ui ireumeun mueos-ingayo?)'
    },
    {
        question : 'What does "반갑습니다 (bangapseumnida)" mean?',
        option : ['Excuse me','Welcome','Goodbye','Nice to meet you'],
        answer : 'Nice to meet you'
    },
    {
        question : 'An expression used to ask someone if they are doing well or if they need any help.',
        option : ['Are you okay?','Goodbye','I am sorry','Hello'],
        answer : 'Are you okay?'
    },
    {
        question : 'What does "어떻게 지내고 있어요?" (eotteoke jinaego isseoyo?) mean?',
        option : ['Have a nice day','How are you?','What would you like to eat?',' Long time no see'],
        answer : 'How are you?'
    },
    {
        question : ' Fiendly expression used to wish someone a pleasant and enjoyable day ahead.',
        option : ['Have a nice day','How are you?','What would you like to eat?',' Long time no see'],
        answer : 'Have a nice day'
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