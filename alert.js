//Initialization
var permission = confirm(`Welcome to F.R.I.E.N.D.S quiz developed in Javascript\n
Quiz instructions :
There will be 10 questions in this quiz.\nIf you get 10/10 you WIN\nEnter your answer in options (a/b/c/d)\n
Do you want to continue quiz ?`);
var score=0;
var userAnswer=0;


// Processing part
function answerChecking (question,options,quizAnswer)
{
//   alert(question+options);
    userAnswer=prompt(question+options);
  if (userAnswer!==null){
  if(quizAnswer.toUpperCase()===userAnswer.toUpperCase())
  {
    score++;
    alert(`You are right !
Score is: ${score}`);
  }
  else
  {
    alert(`Wrong !
Correct answer is: ${quizAnswer}`);
  }
    }else{}
}


//Array of quiz questions
var quizQuestion=[{
  question:"\n1. The series Friends is set in which city?\n",
  options: `a. Los Angeles
b. New York City
c. Miami
d. Seattle\n
Your answer is: `,
  quizAnswer:"b",
},{
  question:"\n2. What pet did Ross own?\n",
  options:`a. A dog named Keith
b. A rabbit called Lancelot
c. A monkey named Marcel
d. A lizard named Alistair\n
Your answer is: `,
  quizAnswer:"c",
},{
  question:"\n3. What kind of uniform does Joey wear to Monica and Chandler’s wedding?\n",
  options:`a. Chef
b. Soldier
c. Fire fighter
d. A baseball player\n
Your answer is: `,
  quizAnswer:"b",
},{
  question:"\n4. What’s the name of Joey’s penguin?\n",
  options:`a. Snowflake
b. Waddle
c. Huggsy
d. Bobber\n
Your answer is: `,
  quizAnswer:"c",
},{
  question:"\n5. What’s the name of Janice’s first husband?\n",
  options:`a. Gary Litman
b. Sid Goralnik
c. Rob Bailystock
d. Nick Layster\n
Your answer is: `,
  quizAnswer:"a",
},{
  question:"\n6. What song is Phoebe best known for?\n",
  options:`a. Smelly Cat
b. Smelly Dog
c. Smelly Rabbit
d. Smelly Worm\n
Your answer is: `,
  quizAnswer:"a",
},{
  question:"\n7. What job does Ross have?\n",
  options:`a. Paleontologist
b. Artist
c. Photographer
d. Insurance salesman\n
Your answer is: `,
  quizAnswer:"a",
},{
  question:"\n8. What does Joey never share?\n",
  options:`a. His books
b. His information
c. His food
d. His DVDs\n
Your answer is: `,
  quizAnswer:"c",
},{
  question:"\n9. What is Chandler’s middle name?\n",
  options:`a. Muriel
b. Jason
c. Kim
d. Zachary\n
Your answer is: `,
  quizAnswer:"a",
},{
  question:"\n10. What is the name of Phoebe’s alter-ego?\n",
  options:`a. Phoebe Neeby
b. Monica Bing
c. Regina Phalange
d. Elaine Benes\n
Your answer is: `,
  quizAnswer:"c",
} ];


//Input calling 
if (permission!=false){
for(let i=0;i<quizQuestion.length;i++){
  if(userAnswer!=null){
  answerChecking(quizQuestion[i].question,quizQuestion[i].options,quizQuestion[i].quizAnswer);
}else{}}


//Output (Wishing user)
if(score===10){
    alert("Congratulation you have won this quiz !")
}else{
    alert(`Better luck next time\nYour total score is ${score}/10`);  
}}else{}
