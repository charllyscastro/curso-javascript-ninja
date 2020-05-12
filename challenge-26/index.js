(function(win, doc){
  'use strict';

  var fragment = document.createDocumentFragment();
  var childP = document.createElement('p');
  var textChild = document.createTextNode( 'texto aqui');

  childP.appendChild(textChild);
  fragment.appendChild(childP);

  document.body.appendChild(fragment);

})(window, document);
