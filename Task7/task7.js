let itemList = document.querySelector('#items');

// PARENT ELEMENT

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#f4f4f4';

// LASTELEMENTCHILD
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';

// LASTCHILD
console.log(itemList.lastChild);

// CREATE DIV
let newDiv = document.createElement('div');

// ADD CLASS
newDiv.className = 'newclass';

// ADD ID
newDiv.id='newdiv';

//ADD ATTRIBUTE
newDiv.setAttribute('title', 'hello div');

//CREATE TEXTNODE
let newDivText = document.createTextNode('Hello');

//ADD TEXT TO DIV
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1)
console.log(newDiv);


//FIRSTELEMENTCHILD
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//NEXTSIBLING
let title = document.querySelector('.title')
console.log(title.nextSibling);

//NEXTELEMENTSIBLING
console.log(title.nextElementSibling);

//PREVIOUS SIBILING
console.log(title.previousSibling);

//PREVIOUS ELEMENT SIBILING
console.log(itemList.previousElementSibling);

let parentnode = document.getElementById('items');
parentnode.innerHTML = '<li class="list-group-item">Hello World</li>' + parentnode.innerHTML

let item=document.querySelector('.list-group-item')
console.log(item.nextElementSibling)

