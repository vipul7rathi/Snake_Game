var read = 19;
var id=null;
var mf=200;
var box = document.querySelector(".m");
var snake = document.querySelector('.snake');
var posx = 0;
var posy = 0;
var size = 25;
var direction = null;
var score = 0;
var key =39;
function randomize() 
{
	const read = 19;
	var x = Math.floor(Math.random() * read);
	x *= 25;
	var y = Math.floor(Math.random() * read);
	y *= 25;
	var dot=document.getElementById("dot");
	dot.style.left = x + "px";
	dot.style.top = y + "px";
}

function moveSnake(){
		if(posx > 475 || posx < 0 || posy < 0 || posy > 475){
		clearInterval(id);
		alert("Game Over, Score: " + score);
		return;
		}
		box = document.querySelector(".m");
	var dot=document.getElementById("dot");
	var dot_left = parseInt(dot.style.left);
	var dot_top = parseInt(dot.style.top);
	if(direction == 'right'){
		posx += size;
	}
	else if(direction == 'left'){
		posx -= size;
	}
	else if(direction == 'top'){
		posy -= size;
	}
	else if(direction == 'down'){
		posy += size;
	}
	console.log(dot_left, dot_top);
	console.log(posx, posy);
	check();
	var childNodes = box.querySelectorAll('.snake');
	if(posx == dot_left && posy == dot_top){
		score += 1;
		scorer();
		randomize();
	}
	else{ 
		var firstElem = box.querySelector('.snake');
		var lastElem = childNodes[childNodes.length-1];
		lastElem.remove();
		}
	var newElem = document.createElement('div');
	newElem.setAttribute('class','snake');
		if(childNodes.length == 1){
			box.insertAdjacentElement("afterbegin",newElem);
		}
		else{ 
			box.insertBefore(newElem, childNodes[0]);
		}
	newElem.style.left = posx + "px";
	newElem.style.top = posy + "px";
}

function getDirection(event){
	if(event.keyCode == 13 || event.keyCode == 39 && (key!=37))
	{
		key=39;
		return "right";
	}
	else if(event.keyCode == 40 && key!=38) 
	{
		key=40;
		return "down";    
	}
	else if(event.keyCode == 37 && key!=39) 
	{
		key=37;
		return "left";
	}
	else if(event.keyCode == 38 && key!=40)
	{
		key=38;
		return "top";
	}
	return direction;
}

function whichButton(event){
	event.preventDefault();
	direction = getDirection(event);
	if(!id){
		id = setInterval(moveSnake, 200);
	}
}
function check()
{
	var childNodes = box.querySelectorAll('.snake');
	var firstElem = box.querySelector('.snake');
	for(var i=1;i<childNodes.length;i++)
	{
		if(firstElem.style.top == childNodes[i].style.top && firstElem.style.left == childNodes[i].style.left)
		{
		clearInterval(id);
		alert("Game Over, Score: " + score);
		return;
		}
	}
}
function color()
{
	var childNodes = box.querySelectorAll('.snake');
	var firstElem = box.querySelector('.snake');
	for(var i=0;i<childNodes.length-1;i++)
	{
		childNodes[i].style.backgroundColor="blue";
	}
}	

function scorer()
{
document.getElementById("scoree").innerHTML = "Score is "+score;
}
randomize();

