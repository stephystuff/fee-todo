(function(){
  window.dom = window.dom || {};

  // Function for marking an item complete and deleting item//
  document
  .querySelector('ul')
  .addEventListener('click', function markComplete(eventObj){
    eventObj.preventDefault();
    if (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check') {
      eventObj.target.parentNode.classList.toggle('completed');
    } else if
      (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete') {
      eventObj.target.parentNode.remove();
    }
  });

















})();
