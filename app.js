function onReady() {
  let toDos = [];
  let id = 0;

  let ls = JSON.parse(localStorage.getItem("toDos"));
  if(ls !== null){
    toDos = ls;
  }

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if(!newToDoText.value){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';
    id++;
    renderTheUI();
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');

      // create checkbox and add check function
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if(toDo.complete){
        checkbox.checked = true;
      }

      checkbox.addEventListener('click', function(event){
        if(this.checked){
          toDo.complete = true;
        } else if(!this.checked){
          toDo.complete = false;
        }
        localStorage.setItem("toDos", JSON.stringify(toDos));

      });

      // create delete button and add delete funciton
      const deletebtn = document.createElement('button');
      deletebtn.textContent = 'Delete';

      deletebtn.addEventListener("click", function(event){
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        });
        if(toDos.length == 0){
          localStorage.removeItem("toDos");
          id = 0;
        }
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebtn);

      // save toDo into localstorage
      console.log("to Dos : " + JSON.stringify(toDos));
      localStorage.setItem("toDos", JSON.stringify(toDos));
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  // alert("The window has loaded!");
  onReady();
};
