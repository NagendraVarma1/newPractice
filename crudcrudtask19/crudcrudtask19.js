function deleteTheUserDetails(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phone').value;

    let obj = {
        name, 
        email,
        phonenumber
    }
    axios.post("https://crudcrud.com/api/b38628e56c00475aa77863ed6ecc0bf1/AppointmentList3",obj)
    .then((res) => {
        show(res.data);
    })
    .catch((err) => {
        console.log(err);
    })

}

function show(obj) {

    let ul = document.getElementById('list');

    axios.get("https://crudcrud.com/api/b38628e56c00475aa77863ed6ecc0bf1/AppointmentList3")
    .then((res) => {
        const appointments = res;
        for(let i=0; i<appointments.data.length;i++)
        {
            let appointment = appointments.data[i];
            let li = document.createElement('li');
            let dltBtn = document.createElement('button');
            dltBtn.textContent = 'Delete';

            dltBtn.onclick = () => {
                axios.delete(`https://crudcrud.com/api/b38628e56c00475aa77863ed6ecc0bf1/AppointmentList3/${appointment._id}`)
                .then((res) => {
                    ul.removeChild(li);
                })
            }
            
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';

            li.textContent = `Name: ${obj.name}, Email Id: ${obj.email}, Phone No: ${obj.phonenumber}`;
            li.append(dltBtn);
            li.append(editBtn);
            ul.appendChild(li)
        }
    })

    
}

window.addEventListener('load', () => {
    axios.get("https://crudcrud.com/api/b38628e56c00475aa77863ed6ecc0bf1/AppointmentList3")
    .then((res) => {
        for(let i=0;i<res.data.length;i++)
        {
            show(res.data[i])
        }
    })
})