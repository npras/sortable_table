(function($){
  $('table#myTable th').on('click', function(){
    alert($(this).text());
  });

  function prepareTable(table_id){
    table = $('table' + '#' + table_id);
    rows = table.find('tbody > tr').size();
    cols = table.find('thead th').size();
    console.log("rows: " + rows + ", cols: " + cols);
  }

  prepareTable('myTable');

})(jQuery);
