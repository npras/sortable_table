(function($){

  var rows_cnt, cols_cnt, headers;

  function prepareTable(table_id){
    table = $('table' + '#' + table_id);
    rows_cnt = table.find('tbody tr').size();
    cols_cnt = table.find('thead th').size();
    headers = table.find('thead th').map(function(){
      return $(this).text();
    }).get();
    console.log("rows: " + rows_cnt + ", cols: " + cols_cnt + " , headers: " + headers);
  }

  function mySort(array){
    return array.sort();
  }

  // collect the clicked column's data into an array
  $('table#myTable th').on('click', function(){
    clckd_header = $(this).text();
    clckd_idx = headers.indexOf(clckd_header) + 1;
    col_data = [];
    col_data_selector_expr = "tbody tr td:nth-child("+ clckd_idx +")";
    $(col_data_selector_expr).each(function(){
      col_data.push($(this).text());
    });
    col_data = mySort(col_data);
    alert("col_data: " + col_data);
  });

  prepareTable('myTable');

})(jQuery);
