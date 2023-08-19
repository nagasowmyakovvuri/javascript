let d=document.getElementById('tab');
d.style.border="1px solid black";

let s=document.querySelectorAll("th");
for(var i=0;i<s.length;i++)
s[i].style.border="1px solid black";


 var a=[
{
	'coursename':"html",
	'coursenumber':23423,
	'coursefees':235,
	'place':'dwp',
},
{
	'coursename':"css",
	'coursenumber':21234,
	'coursefees':254,
	'place':'dwp',
},
{
	'coursename':"html",
	'coursenumber':5324,
	'coursefees':265,
	'place':'dwp',
},
]

  for(var i=0;i<a.length;i++)
  {	
  	
  	let table=document.getElementById('body');
let row = table.insertRow(0); 
let c1 = row.insertCell(0);
 let c2 = row.insertCell(1);
 let c3 = row.insertCell(2);
 let c4 = row.insertCell(3);
c1.innerText = a[i].coursename
c2.innerText = a[i].coursenumber
c3.innerText = a[i].coursefees
c4.innerText=a[i].place
c1.style.border="1px solid black";
c2.style.border="1px solid black";
c3.style.border="1px solid black";
c4.style.border="1px solid black";
  }


