let del = function () {
    $('#delete-button-div').on('click', function () {
        var checkedList = $('input:checkbox:checked');
        var items = new Array();
        for (let i of checkedList) {
            items.push(i.getAttribute("value"));
        }
        sendResponse(items);
    }
    );
    function sendResponse(items) {
        $.ajax({
            type: 'post',
            url: '/delete',
            data: { items:items },
            success: function (data) {
                location.reload();
            }
        });
    }
}
del();