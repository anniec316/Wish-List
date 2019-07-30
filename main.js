var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNewUser);

function createNewUser() {
  var toDo = $('.to-do').val();

  appendNewToDo(toDo);
  clearInputs();
}

function appendNewToDo(toDo) {
    cardContainer.append(`
    <div class="to-do-card">
      <p>${toDo}</p>
   <button type="button" class="delete-btn">delete </button>
    </div>
  `);
}

function clearInputs() {
  $('.to-do').val("");
}

$('.card-container').on("click",".delete-btn",deleteItem);


 function deleteItem(event){
   event.target.parentNode.remove();
 }
