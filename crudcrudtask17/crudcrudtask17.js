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
    axios.post("https://crudcrud.com/api/d8fe5b6630ae471aa8041ad996ed7b78/AppointmentList1",obj)
    .then((res) => {
        show(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
    
}

function show(obj) {
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let dltBtn = document.createElement('button')
    dltBtn.textContent = 'Delete';

    dltBtn.onclick = () => {
        ul.removeChild(li);
    }
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    editBtn.onclick = () => {
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phonenumber;
        ul.removeChild(li);
    }
    li.textContent = `Name: ${obj.name}, Email Id: ${obj.email}, Phone No: ${obj.phonenumber}`;
    li.append(dltBtn);
    li.append(editBtn);
    ul.appendChild(li);
}
