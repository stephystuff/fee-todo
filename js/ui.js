(function(){
  window.dom = window.dom || {};

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

      if (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete')
            eventObj.target.parentNode.classList.add('delete');
  });
















})();
