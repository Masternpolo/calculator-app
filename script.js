let screen = document.getElementById('display');
let result = document.getElementById('result');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let sqrt = document.getElementById('sqrt');
let cube = document.getElementById('cube');
let percent = document.getElementById('percent');
let showRest = document.getElementById('showRest');
let showSign = document.getElementById('showSign');




showSign.innerHTML = "";
showRest.innerHTML = "";
let leftVal;
let rightVal;
let sign;
let res;


function addToScreen(value) {
	screen.innerHTML += value;
	showRest.innerHTML = "";
	showSign.innerHTML = "";

}
function clearScreen() {
	screen.innerHTML = "";
	showRest.innerHTML = "";
	showSign.innerHTML = "";

}

add.addEventListener('click', addFun);
sub.addEventListener('click', subFun);
divide.addEventListener('click', divFun);
multiply.addEventListener('click', multiplyFun);
result.addEventListener('click', showResult);
sqrt.addEventListener('click', sqrtFun);
cube.addEventListener('click', crootFun);
percent.addEventListener('click', percentFun);





function addFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "+";
	showSign.innerHTML = leftVal +" "+ sign;
	console.log(leftVal);
	screen.innerHTML = "";
}
function subFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "-";
	showSign.innerHTML = leftVal +" "+ sign;
	console.log(leftVal);
	screen.innerHTML = "";
}
function multiplyFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "*";
	showSign.innerHTML = leftVal +" "+ sign;
	console.log(leftVal);
	screen.innerHTML = "";
}
function divFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "/";
	showSign.innerHTML = leftVal +" "+ sign;
	console.log(leftVal);
	screen.innerHTML = "";
}
function sqrtFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "sqrt";
	showSign.innerHTML = sign;
	console.log(leftVal);
	screen.innerHTML = "";
	showResult();
	showSign.innerHTML = sign +" "+ leftVal;

}
function crootFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "**";
	showSign.innerHTML =  sign;
	console.log(leftVal);
	screen.innerHTML = "";
	showResult();
	showSign.innerHTML = sign +" "+ leftVal;
}
function percentFun() {
	leftVal = parseFloat(screen.innerHTML);
	sign = "%";
	showSign.innerHTML = leftVal +" "+ sign;
	console.log(leftVal);
	screen.innerHTML = "";
}

function signFun(val) {
	if(val == "**" || val == "sqrt"){

	showSign.innerHTML =  val + " "+ lefttVal;
	}else {
	showSign.innerHTML = leftVal +" "+ val + " "+ rightVal;
	}

}
function showResult() {
	rightVal = parseFloat(screen.innerHTML)
	showSign.innerHTML = leftVal +" "+ sign + " "+ rightVal;

	screen.innerHTML = "";
	switch (sign) {
		
		case "+":
			res = leftVal + rightVal;
			break;

		case "-":
			res = leftVal - rightVal;
			break;

		case "*":
			res = leftVal * rightVal;
			break;

		case "/":
			res = leftVal / rightVal;
			break;
		case "sqrt":
			res = Math.sqrt(leftVal);
			break;
		case "**":
			let croot = 1 / 3;
			console.log(croot);
			res = leftVal ** croot;
			break;
		case "%":
			res = (leftVal)/100 * rightVal;
			break;

		default:
			res = "syntax error. ";
			res += "press C to clear the screen";
			break;
	}
	if(res.length > 3) {
		res
	}
	showRest.innerHTML = res.toLocaleString();
}

//API call
const api = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))