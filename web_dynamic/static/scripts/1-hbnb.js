$(document).ready(function () {
    let dict = {};
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            dict[$(this).data('id')] = $(this).data('name');
        } else {
            delete dict[$(this).data('id')];
        }
        const value = Object.values(dict);
        if (value.lenght > 0) {
            $('div.amenities > h4').text(value.join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });
});