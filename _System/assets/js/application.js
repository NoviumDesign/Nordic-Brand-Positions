
/* -------- _System/assets/js/form.js -------- */ 

// Validation
$.validate({
  borderColorOnError : '#c0392b'
});

// Message after form is sent
$(document).ready(function() { 
  $('#contactForm').ajaxForm(function() { 
    $('#formMessage').addClass('success').fadeIn().html('<h3>Tack för din kontaktförfrågan</h3> <p>Vi hör av oss inom kort.</p>');
    $('#contactForm').fadeOut();//Hide the form
  });
});

/* -------- _System/assets/js/lang-selector.js -------- */ 

$(function(){
  // bind change event to select
  $('#langSelect').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});

/* -------- _System/assets/js/mobile-nav.js -------- */ 

$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active, close" );
});
