(function(){
  window.dom = window.dom || {};

  function newToDo(text){

    var addLi = document.createElement('li');

    var addArticle = document.createElement('article');

    var addButton = document.createElement('button');
    addButton.classList.add('check');
    addArticle.appendChild(addButton);

    var addParagraph = document.createElement('p');
    addParagraph.innerText = text;
    addArticle.appendChild(addParagraph);

    var addXButton = document.createElement('button');
    addXButton.classList.add('delete');
    addXButton.innerText = 'X';
    addArticle.appendChild(addXButton);

    addLi.appendChild(addArticle);
    document.querySelector('ul').appendChild(addLi);
  }

  document.querySelector('form').addEventListener('submit', function submit(eventObj){
    eventObj.preventDefault();
    var newSubmission = document.querySelector('.new-todo').value;

    newToDo(newSubmission)
  });

  document
    .querySelector('ul')
    .addEventListener("click", function markComplete(eventObj){
      eventObj.preventDefault();
      if (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check')
        eventObj.target.parentNode.classList.add('completed');

      


  });









})();
