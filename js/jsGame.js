// JavaScript Game / Exercise 8.6

//The first line is written to load the full page first and then show to the user
window.addEventListener("load", dofirst);

//By declaring this line you are calling the form from HTML
function dofirst() {
document.getElementByName("nGame").addEventListener("click", checkValue);
}

//For this purpose the 'Math.round(Math.random()*(99)+1)' to set a random number everytime the user wants to play
	var rndNum=Math.round(Math.random()*(99)+1);
	var greeting='Try to guess!';

//This function will be activated when the user hit the 'Try!' button
	function process(hideNum) {
	var guess=document.forms.nGame.guess.value;
	var greeting='"'+guess+ '" does not make sense to me.';
	document.forms.nGame.guess.value='';

//'if' is use to proceed with the code in this block when the condition is true, in this case if the number entered is less than the random number
	if (hideNum<guess)
	{
	greeting='Less than '+ guess;
	}

//'else' is used when the 'if' condition is false, in this case will activate when the number is more than the random number
	else
	{
	greeting='Greater than '+ guess;
	}

//This is for fun, let say that the user didn't enter any number, it'll display a fun message, all you have to do is declare: if the number entered is empty, display the message
	if (guess=='')
	{
	greeting='Don\'t be lazy... C\'mon'
	}

//Another condition is placed, when the user enter a number the condition will compare if is the same as the random number, if is the samen then show 2 popup message saying congratz, this is made by the alert () method when you can put as many as you want, has the OK button to close it
	if (guess==hideNum)
	{
	document.forms.nGame.messageBox.value='Congratulations! '+hideNum+' You WON!';
	alert ('You WON!! \n\nClick to receive your price');
	alert ('Nah... There\'s no price :( Sorry... \n\nBut click to play again!');
	greeting='';
	document.location=document.location;
	}

	document.forms.nGame.messageBox.value=greeting; document.forms.nGame.guess.focus();

	}

//This function will create the specify amount of buttons entered by the user
	function dofirst() {
	document.getElementById("btnLoop").addEventListener("click",loopValue);
	}

//Loops are used to run the code as many times as you declare, in this case it will run as many times as the number entered by the user
	function loopValue() {
	var i = 1;
	var buttonsHTML = "";
	var testVar;
	testVar = document.getElementById("txtB").value;
	while (i <= testVar) {
	buttonsHTML = buttonsHTML + '<p id="container">' + i + '</p>';
	i++
	};
	document.getElementById("buttons").innerHTML = buttonsHTML;
	}