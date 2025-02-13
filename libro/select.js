$('select').hover(function() {

    $(this).attr('size', $('option').length);
  }, function() {
  
    $(this).attr('size', 1);
  });