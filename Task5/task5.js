//GETELEMENTSBYCLASSNAME

let items=document.getElementsByClassName('list-group-item');

for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//GETELEMENTSBYTAGNAME

let li = document.getElementsByTagName('li')

for(let i=0; i<li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4'
}
