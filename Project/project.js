function getTheProductDetails(event){
    event.preventDefault();

    let price = document.getElementById('price').value;
    let name = document.getElementById('name').value;
    
    let obj = {
        price,
        name
        
    }
    axios.post("https://crudcrud.com/api/e57931b35d194271a69460ef77a19cac/ProductList", obj)
    .then((res) => {
        show(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
}
let amount = 0;
function show(obj){
    
    amount = amount+parseInt(obj.price)
    let span = document.getElementById('amount');
        
    span.textContent = `Rs. ${amount}`
    
    let ul = document.getElementById('productList');
    let li = document.createElement('li');
    li.className = "my-3";
    let dltBtn = document.createElement('button');
    dltBtn.textContent = "Delete Item";
    dltBtn.className = "btn btn-sm btn-danger mx-5"

    dltBtn.onclick = () => {

        axios.delete(`https://crudcrud.com/api/e57931b35d194271a69460ef77a19cac/ProductList/${obj._id}`)
        .then(() => {
            ul.removeChild(li);
            amount = amount - parseInt(obj.price);
            span.textContent = `Rs. ${amount}`
        })
        .catch((err) => {
            console.log(err)
        })
    }
    li.textContent = `Product Name: ${obj.name}, Price: ${obj.price}`;
    li.append(dltBtn);
    ul.appendChild(li);
}

window.addEventListener('load', () => {
    axios.get("https://crudcrud.com/api/e57931b35d194271a69460ef77a19cac/ProductList")
    .then((res) => {
        let data = res.data;
        for(let i=0;i<data.length;i++)
        {
            show(data[i]);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})