// function todo() {
//     let input = document.getElementById('input');
//     let list = document.getElementById('list');  
//     list.innerHTML += `<li>${input.value}</li><button onclick = "edit(prompt(''))"><i class="fa-solid fa-pen-to-square"></i></button><button onclick='del()''><i class="fa-solid fa-trash"></i></button>`
//     input.value = " "
// }
// function edit(a) {
//     let list = document.getElementById('list');
//     list.innerHTML = `<li>${a}</li><button onclick='del()'><i class="fa-solid fa-trash"></i></button>`
// }
// function del() {
//     let list = document.getElementById('list');
//     list.innerHTML = " "}
// function DeleteAll(){
// let list = document.getElementById('list');
// list.innerHTML=" "
// }
function todo() {
    let input = document.getElementById('input');
    let list = document.getElementById('list');
    
    let li = document.createElement('li');
    li.innerText = input.value;
    
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', function() {
      edit(li);
    });
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function() {
      del(li);
    });
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    input.value = "";
  }
  
  function edit(li) {
    let newText = prompt("Enter new text");
    li.firstChild.textContent = newText;
  }
  
  function del(li) {
    li.remove();
  }
  
  function DeleteAll() {
    let list = document.getElementById('list');
    list.innerHTML = "";
  }
  