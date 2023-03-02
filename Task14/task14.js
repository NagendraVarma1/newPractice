function getTheUserDetails(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phone').value;

    let obj = {
        name,
        email,
        phonenumber
    }

    localStorage.setItem(obj.name ,JSON.stringify(obj));

    show(obj);
}

function show(obj){

    let ul = document.getElementById('list');
    let li = document.createElement('li');

    let dltBtn = document.createElement('input');
    
    dltBtn.type = 'button';
    dltBtn.value = 'Delete';

    let editBtn = document.createElement('input');
    
    editBtn.type = 'button';
    editBtn.value = 'Edit';

    dltBtn.onclick = () => {
        localStorage.removeItem(obj.name);
        ul.removeChild(li);
        
    }

    editBtn.onclick = () => {
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phonenumber;
        localStorage.removeItem(obj.name);
        ul.removeChild(li);
        
    }

    li.textContent = obj.name+' '+obj.email+' '+obj.phonenumber;
    li.append(dltBtn);
    li.append(editBtn);
    ul.appendChild(li);
}