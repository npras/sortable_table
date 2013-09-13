(function($){

  var table;
  var headers;

  prepareTable('myTable2');

  // Populate the table and headers vars.
  function prepareTable(table_id){
    table = $('table' + '#' + table_id);
    headers = table.find('thead th').map(function(){
      obj = {"name": $(this).text(), "flag": "dsc"};
      return obj;
    }).get();
  }

  // The all-important click event and it's callback.
  table.find('th').on('click', function(){
    rows = table.find("tbody tr");
    clckd_header = $(this).text();
    clckd_idx = find_index(clckd_header);
    /* Pass by ref or value? Should I assign a return value or just trust the
    ** pass-by-obj notion?
    ** Check this out: http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language/
    */
    toggle_sort(rows, clckd_idx);
    table.find("tbody tr").remove();
    table.find("tbody").append(rows);
  });

  function find_index(search_item){
    result_idx = 0;
    len = headers.length;
    for(var i = 0; i < len; i++){
      if(headers[i].name === search_item){
        result_idx = i;
        break;
      }
    }
    return result_idx;
  }

  function toggle_sort(items, sort_key_idx){
    var is_ascending = false;
    
    // Toggle logic.
    if(headers[sort_key_idx].flag === "dsc"){
      headers[sort_key_idx].flag = "asc";
      is_ascending = true;
    } else {
      headers[sort_key_idx].flag = "dsc";
      is_ascending = false;
    }

    items.sort(function(row_obj_a, row_obj_b){
      human_idx = sort_key_idx + 1;
      value_selector = "td:nth-child("+ human_idx +")";
      a = $(row_obj_a).find(value_selector).text();
      b = $(row_obj_b).find(value_selector).text();
      if(is_ascending){
        return (a < b);
      } else{
        return (a > b);
      }
    });
  }

})(jQuery);
