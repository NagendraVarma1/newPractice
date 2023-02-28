let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
//form submit event
form.addEventListener('submit', addItem);
//remove event
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    let editBtn = document.createElement('edit');
    editBtn.className = 'btn btn-light btn-outline-dark btn-sm float-sm-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
