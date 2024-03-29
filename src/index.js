document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  
  form.addEventListener('submit',(e)=>{
  e.preventDefault()
  handleToDo(e.target.querySelector('#new-task-description').value)
  form.reset()
  })
  
});
function handleToDo (todo){
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener('click', HandleDelete)
  btn.textContent = "Delete"
  li.textContent = todo
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
  console.log(li);
}

function HandleDelete(e){
  e.target.parentElement.remove()
}

