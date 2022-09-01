// ==UserScript==
// @name        Remove white spaces in posta beki phone numer
// @namespace   Facebook
// @match       https://violentmonkey.github.io/guide/creating-a-userscript/
// @match           https://posta-beki.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 8/31/2022, 10:49:53 AM
// ==/UserScript==

var str = document.getElementById('Phone');

str.addEventListener('keypress', function ( event ) {  
   var key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
});

function handleInput(e) {
  var el = this;

  window.setTimeout(function() {
    el.value = el.value.replace(/\D/g, '');
    el.value = el.value.replace('-', '');
    el.value = el.value.replace('/', '');
  }, 0);
}

str.addEventListener('paste', handleInput, false);