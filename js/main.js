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

  function compare(obj_a, obj_b){
    selector = "td:nth-child("+ clckd_idx +")";
    a = $(obj_a).find(selector).text();
    b = $(obj_b).find(selector).text();
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    } else {
      return 0;
    }
  };

  $('table#myTable2 th').on('click', function(){
    sorted_rows = $("table#myTable2 tbody tr");
    clckd_header = $(this).text();
    clckd_idx = headers.indexOf(clckd_header) + 1;
    td_selector_expr = "td:nth-child("+ clckd_idx +")";
    sorted_rows.sort(compare);
    //$("table#myTable2 tbody").replaceWith(sorted_rows);
    $("table#myTable2 tbody tr").remove();
    $("table#myTable2 tbody").append(sorted_rows);
  });

  prepareTable('myTable2');

})(jQuery);
