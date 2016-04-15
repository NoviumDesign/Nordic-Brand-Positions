
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

/* -------- _System/assets/js/mobile-nav.js -------- */ 

$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active, close" );
});
