var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementById("deleteall");
var li = document.getElementsByTagName("li");
var p =document.getElementById("first");
var delli1 = document.getElementById("delete1");
var delli2 = document.getElementById("delete2");
var delli3 = document.getElementById("delete3");
var delli4 = document.getElementById("delete4");
var delli5 = document.getElementById("delete5");


function inputlength(){
	return input.value.length;
}
function addnewelement(){
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	var newbttn = document.createElement("button");
	newbttn.appendChild(document.createTextNode("delete"));
	li.appendChild(newbttn);
	newbttn.addEventListener("click",function(){
		li.remove();
	})
	}
function clickelement(){
	if(inputlength()>0){
	addnewelement()
	}
}
function presselement(){
	if(inputlength()>0 && event.keyCode === 13){
	addnewelement()
	}
}
button.addEventListener("click" , clickelement);
input.addEventListener("keypress" , presselement);
	
	
del.addEventListener("click",function(){
	while (ul.hasChildNodes())
	ul.removeChild(ul.firstChild);
	
})
delli1.addEventListener("click",function(){
	var fli=document.getElementById("fli");
	fli.remove();
})
delli2.addEventListener("click",function(){
	var sli=document.getElementById("sli");
	sli.remove();
})
delli3.addEventListener("click",function(){
	var tli=document.getElementById("tli");
	tli.remove();
})
delli4.addEventListener("click",function(){
	var foli=document.getElementById("foli");
	foli.remove();
})
delli5.addEventListener("click",function(){
	var fifli=document.getElementById("fifli");
	fifli.remove();
})



