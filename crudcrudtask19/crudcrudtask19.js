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
    axios.post("https://crudcrud.com/api/ff2cbf6bbcbb4d01bf7656b252f7cfa7/AppointmentList3",obj)
    .then((res) => {
        show(res.data);
    })
    .catch((err) => {
        console.log(err);
    })

}

function show(obj) {

    let ul = document.getElementById('list');
    let li = document.createElement('li');
    axios.get("https://crudcrud.com/api/ff2cbf6bbcbb4d01bf7656b252f7cfa7/AppointmentList3")
    .then((res) => {
        const appointments = res.data;
        for(let i=0; i<appointments.length;i++)
        {
            let appointment = appointments[i];
            
            let dltBtn = document.createElement('button');
            dltBtn.textContent = 'Delete';

            dltBtn.onclick = () => {
                axios.delete(`https://crudcrud.com/api/ff2cbf6bbcbb4d01bf7656b252f7cfa7/AppointmentList3/${appointment._id}`)
                .then(() => {
                    ul.removeChild(li);
                })
                .catch((err) => {
                    console.log(err)
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
