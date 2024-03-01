let save = document.querySelector("#savebtn");
let inputTask = document.querySelector("#inputTask");
let listItems = document.querySelector("#listItems");
// let list = document.querySelector(".list");
save.addEventListener("click",()=>{

    if(inputTask.value===""){
        alert("Write something to add");
    }
    else{
    //checkbox   
    let check = document.createElement("Input");
    check.setAttribute("type","checkbox");
    check.classList.add("checkbox");
  
    //list items
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    listItems.append(li);
    li.prepend(check);
    inputTask.value="";  

    //remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Append remove button to list item
    li.appendChild(removeButton);

    // Add click event listener to remove button
    removeButton.addEventListener('click', function() {
       li.remove();
    });
   }
})
