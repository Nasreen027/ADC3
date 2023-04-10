const onButtonClick= document.getElementById("addButton");
const inputItem = document.getElementById("Input");
const todoList = document.getElementById("todo-list");
//  function on button ////////
//////////////////////////////
onButtonClick.addEventListener("click", function() {
    // restriction //
    if(!inputItem.value){
    document.getElementById("restriction").textContent= "Please enter text"
    return;
}else{
    document.getElementById("restriction").textContent= "" 
}
        //    taking value from input 
  const Text = inputItem.value;
//   creating element "li" 
  const createLi= document.createElement("li");
            // appending input text //
  createLi.textContent = Text;
  todoList.appendChild(createLi);
  
  inputItem.value = "";
});