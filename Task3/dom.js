let headerTitle=document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid black 5px ';


let header=document.getElementById('main-header');
header.style.border ='solid red 3px';


let main=document.getElementById('main');
main.style.border = 'solid black 3px';


let li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}