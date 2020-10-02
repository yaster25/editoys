$(document).ready(function() {
    
});


function ClientRegister2() {
  $.fancybox ({
      type: 'inline',
      href:'#y-register-thank',
      wrapCSS : 'fancybox-y-popup',
      padding:0, 
      margin:0, 
      maxWidth : 420, 
      fitToView	: false,
      helpers: {
          overlay: {
				locked: false
          }
      }
    });
  return false; 
}

function added() {
  $.fancybox ({
      type: 'inline',
      href:'#y-popup-added',
      wrapCSS : 'fancybox-y-popup',
      padding:0, 
      margin:0, 
      maxWidth : 725, 
      fitToView	: false,
      helpers: {
          overlay: {
				locked: false
          }
      }
    });
  return false; 
}