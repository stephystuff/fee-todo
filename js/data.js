(function(){
  window.dom = window.dom || {};

  document.querySelector('form').addEventListener('submit', function pressEnter (e){
    e.preventDefault();
  console.log(e);
  console.log(e.target.childNodes[1].value);

      var newItem = document.createElement('li');
      newItem.innerText = e.target.childNodes[1].value;
      console.log('hello');
      newItem.classList.add('new-item');
      document.querySelector('ul').appendChild(newItem);
      console.log('hey');
    })








  });

















})();
