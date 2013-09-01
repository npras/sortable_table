(function($){
  $('table#myTable th').on('click', function(){
    alert($(this).text());
  });
})(jQuery);
