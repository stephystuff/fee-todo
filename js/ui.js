(function(){
  window.dom = window.dom || {};

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
