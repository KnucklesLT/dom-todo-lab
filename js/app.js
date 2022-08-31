const inputElement = document.getElementById('todo-input')
const buttonElement = document.getElementById('submit-button')
const resetElement = document.getElementById('reset-button')
const ulElement = document.getElementById('todo-list')


buttonElement.addEventListener('click', handleClick)
resetElement.addEventListener('click', resetTodo)
ulElement.addEventListener('click',deleteTodo)


function handleClick(evt){
  //check if field is empty when submit is clicked
  if(inputElement.value==='') return
  //create a new <li> element
  const liElement = document.createElement('li')
  //set text to what the user entered into <input> element
  liElement.textContent = inputElement.value
  //reset text in the input field
  inputElement.value = ''
  //add the new <li> element to the page inside the <ul> element
  // document.querySelector('ul').appendChild(liElement)
  ulElement.appendChild(liElement)
}

function deleteTodo(evt){
  ulElement.removeChild(evt.target)
}

function resetTodo(evt){
  inputElement.value = ''
  ulElement.innerHTML = ''
}