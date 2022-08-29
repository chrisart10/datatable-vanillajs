let table;
document.addEventListener('DOMContentLoaded', function () {
    table = new DataTable(
        '#example', {
            scrollY: 600,
            'columnDefs': [
                {
                   'targets': 0,
                   'checkboxes': {
                      'selectRow': true
                   }
                }
             ]
    });
});
