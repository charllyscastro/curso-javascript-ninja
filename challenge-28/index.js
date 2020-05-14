(function(){
  'use strict';
  var $number = document.querySelector('[data-js="input"]');
  var $button = document.querySelector('[data-js="button"]');
  var cep='';

  $button.addEventListener('click',function(){
    cep = $number.value;
    ajaxCep();
  },false);

  function ajaxCep(){
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    ajax.send();

    console.log('carregando...');
    var response = '';
    ajax.addEventListener('readystatechange', function(){
      if(isRequestOk()){
        try{
          response = JSON.parse(ajax.responseText);

        }catch(e){
          response = ajax.responseText;
        }
        console.log(response);
      }
    }, false);

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }
  }

})();
