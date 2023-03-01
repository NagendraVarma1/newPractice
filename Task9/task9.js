let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let des = document.getElementById('description').value;
    li.appendChild(document.createTextNode(des));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-light btn-outline-dark btn-sm float-sm-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        let li= e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItems(e){
    
    let text = e.target.value.toLowerCase();
   
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      let itemName = item.firstChild.textContent;
      let desc = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }