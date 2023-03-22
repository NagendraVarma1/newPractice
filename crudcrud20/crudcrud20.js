function updateTheUserDetails(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phone').value;

    let obj = {
        name, 
        email,
        phonenumber
    }

    axios.post("https://crudcrud.com/api/c8bc97279c6e4e6faa5946c98d075640/Appointment4",obj)
    .then((res) => {
        show(res.data);
    })
    .catch((err) => console.log(err))
}

function show(obj){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    
    axios.get("https://crudcrud.com/api/c8bc97279c6e4e6faa5946c98d075640/Appointment4")
    .then((res) => {
        let allDetails = res.data;
        for(let i=0; i<allDetails.length;i++){
            let details = allDetails[i];
            
            let dltBtn = document.createElement('button')
            dltBtn.textContent = 'Delete';

            dltBtn. onclick = () => {
                axios.delete(`https://crudcrud.com/api/c8bc97279c6e4e6faa5946c98d075640/Appointment4/${details._id}`)
                .then(() => {
                    ul.removeChild(li)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';

            editBtn.onclick = () => {
                axios.delete(`https://crudcrud.com/api/c8bc97279c6e4e6faa5946c98d075640/Appointment4/${details._id}`)
                .then(() => {
                    document.getElementById('name').value = details.name;
                    document.getElementById('email').value = details.email;
                    document.getElementById('phone').value = details.phonenumber;
                    ul.removeChild(li)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            li.textContent = `Name: ${obj.name}, Email: ${obj.email}, Phone No: ${obj.phonenumber}`;
            li.append(dltBtn);
            li.append(editBtn);
            ul.appendChild(li)
        }
    })
}

window.addEventListener('load', () => {
    axios.get("https://crudcrud.com/api/c8bc97279c6e4e6faa5946c98d075640/Appointment4")
    .then((res) => {
        let allData = res.data;
        for(let i=0;i<allData.length;i++)
        {
            show(allData[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
})