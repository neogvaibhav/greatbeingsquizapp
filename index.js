var readlineSync = require('readline-sync');
const chalk = require('chalk');
var Score = 0 
//taking input form the user and showing some output
var userName = readlineSync.question('Hii!!what is your name?\n ');

console.log(chalk.green.bgBlack.bold('Welcome '+ userName.toUpperCase() + ' to this Quiz called \"into the lives of great personalities"\!'))
console.log('-----------------------------')
console.log('Rules.\n1. every right answer will award you 1 points\n2. Choose any one correct option out of all the options\n3. there are total 5 questions.')
console.log('-----------------------------')

var Questions = [ 
  {
    question :  chalk.red('1. Who is called as missile man of India\n(a) APJ abdul kalam\n(b) Jawaharlal Nehru\n(c) Subhash chandra bose\n'),
     
    answer : 'a'
  },
  {
    question : chalk.red('2. Who was Prime Minister of Great Britain during World War II?\n(a)Randolph Wimborne\n(b) Winston Churchill\n(c) Hugh Grosvenor\n'),
    answer : 'b'
  },
  {
    question :  chalk.red('3.  Abdul Kalam Azad became the ____ President of India \n(a) 9th \n(b) 10th \n(c)11th\n(D)12th\n'),
    answer : 'c'
  },
  {
    question : chalk.red('4.The 13th Prime Minister of India was ?\n (a) Atal Bihari Vajpayee. \n (b) I.K. Gujral.\n (c) Dr. Manmohan Singh\n'),
    answer : 'c'
  },
  {
    question :  chalk.red('5. Who was the President of the Constitutional Committee and played an important role in drafting the Constitution?\n(a) Dr. B.R. Ambedkar \n(b) Mahatma Gandhi \n(c)Both A & B\n'),
    answer : 'a'
  }
  
]
function solution(question , answer){
  var userQuestion = readlineSync.question(question);
  if (userQuestion ===answer){
    console.log('you are right!!');
    Score = Score + 1;
  }else{
    console.log('oops,you are wrong!!');
  }
  console.log('your score is', Score );
  console.log('-----------------------------') 
}

for(var i=0 ; i<Questions.length; i++){
  var currentQuestion = Questions[i];
  solution(currentQuestion.question , currentQuestion.answer);
}

console.log(chalk.black.bgWhite.bold("your final score is :"+ Score + "" ));

