function saveToLocalStorage(event){
    event.preventDefault();
    
    const name=event.target.username.value;
    const email=event.target.EmailId.value;
    const phonenumber=event.target.phonenumber.value;

    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem('Details',JSON.stringify(obj))
    show(obj)
    
}


function show(obj){
  let ul= document.getElementById("listOfitems")
  let li=document.createElement("li");

  let dltBtn = document.createElement('input');
  dltBtn.type='button'

  
  dltBtn.value=" Delete "
  
  dltBtn.onclick= ()=>{
   
    localStorage.removeItem('Details')
    ul.removeChild(li)
  }

  li.textContent=obj.name+'   '+obj.email+'   '+obj.phonenumber
  li.append(dltBtn)
  ul.appendChild(li)
  
}
