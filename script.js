var name;
var lastname;
var fatherly;
var hobby;
var home;
var urname;
var donos;
function otpravit(){
	name=document.getElementById('name1').value;
	lastname=document.getElementById('lastname1').value;
	fatherly=document.getElementById('fatherly1').value;
	hobby=document.getElementById('hobby1').value;
	home=document.getElementById('home1').value;
	urname=document.getElementById("urname").value;
	donos=document.getElementById("donostext").innerHTML=urname+" донес на "+fatherly+" "+name+" "+lastname+" за то что он "+hobby+" и живет по адресу "+home+" зайдем к нему позже";
}