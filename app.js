function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');
    newLi.classList.add("mdl-list__item");

    // create a new input
    let checkbox = document.createElement('input');
    // add class to checkbox
    checkbox.classList.add("mdl-checkbox__input");
    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    // create label for checkbox
    let lb = document.createElement('label');
    lb.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";

    lb.appendChild(checkbox);

    // create delete button
    let deletebtn = document.createElement('button');
    deletebtn.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";

    // create span class
    let sp1 = document.createElement('span');
    let sp2 = document.createElement('span');
    sp1.classList.add("mdl-list__item-primary-content");
    sp2.classList.add("mdl-list__item-secondary-action");
    sp2.appendChild(lb);


    // set the title
    // newLi.textContent = title;
    sp1.textContent = title;
    deletebtn.textContent = "Delete";

    // add event to delete
    deletebtn.addEventListener("click", function(event){
      toDoList.removeChild(this.parentElement);
    });

    // attach the checkbox to the li
    newLi.appendChild(sp1);
    newLi.appendChild(sp2)
    //newLi.appendChild(checkbox);
    newLi.appendChild(deletebtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });



}

function deleteToDo() {
  console.log('hi');
  let arr = document.getElementById('toDoList');
  let items = arr.getElementsByTagName('li');
  console.log(items.length);
  for( var i = 0; i < items.length; i++){
    var chk = items[i].getElementsByTagName('input');
    if(chk){
      console.log(chk)
      // arr.removeChild(arr.childNodes[i]);
    }
  }
}

window.onload = function() {
  // alert("The window has loaded!");
  onReady();
};
