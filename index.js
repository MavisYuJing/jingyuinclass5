// ADD NEW ITEM TO END OF LIST
var parent = document.querySelector('ul');

var five = document.createElement('li');
var txt=document.createTextNode('cream');

five.appendChild(txt);
five.setAttribute("id", "five");
parent.appendChild(five);


// ADD NEW ITEM START OF LIST
var one = document.getElementById('one');

var zero = document.createElement('li');
var txt2=document.createTextNode('kale');

zero.appendChild(txt2);
zero.setAttribute('id','zero');
parent.insertBefore(zero,one);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var lis = document.querySelectorAll('li');

for (var i=0;i<lis.length;i++){
    lis[i].setAttribute('class','cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var num = document.getElementsByTagName("li").length;
var h2 = document.querySelector('h2');

var span =  document.createElement('span');
var txt3=document.createTextNode(num);
span.appendChild(txt3);
h2.appendChild(span);
