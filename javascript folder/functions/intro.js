/*function test()
{
	alert("testing");
   document.write("hello world");
}
test()*/


/*function with arguments
function getname(a)
{
	document.write(a);
}
*/


/*default value for a function parameters
function getname(a="naga sowmya")
{
	document.write(a);
}
getname("sowmya"+"<br>");
getname();

var a=prompt("scan your id");
function scanyourid(rollno)
{
	document.write(rollno);
}
scanyourid(a)
*/

//adding pf two input numbers
/*let a=prompt("enter a value");
let b=prompt("enter b value");
a=Number(a);
b=Number(b);
function addtion(a,b)
{
	document.write(a+b);
}
addtion(a,b)

*/


//anonymus function-->function with no name
/*var a=10,b=90;
var d=function(a,b)
{
	return a*b;
}
document.write(d(a,b));
*/


//arrow function--> no function keyword
//with one parameter

/*var a=10;
add=a=>{
	document.write(a);
}
add(a);*/

//with two parameter

/*var a=10,b=90;
add=(a,b)=>{
	document.write(a+b);
}
add(a,b);
*/

//with no parameters --> we can use empty parethesis or underscore also
/*add=()=>
{
	document.write("hello");
}
add();*/

/*add=_=>
{
	document.write("hello");
}
add();*/

/*var a=10,b=90;
 var d=function mult(a,b)
     	 {
     	 	return a*b;
     	 }
document.write(d(a,b));*/

/*settimeout function is used to display the output
 after sometime whenever we want*/
/*setTimeout(function()
{
	document.write("hello Eveyone");
},5000)*/


/*callback function -->means if we use a function name as a parameter
 for another function*/
/*setTimeout(hello,3000)
function hello()
{
	document.write("hello sowmya");
}*/