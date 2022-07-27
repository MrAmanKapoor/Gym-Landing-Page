
$(document).ready(function () {
    $("body").on("contextmenu", function (e) {
        return false;
    });

});
$(document).bind('keydown', function (e) {
    if (e.ctrlKey && (e.which == 83)) {
        e.preventDefault();

        return false;
    }
    else if (e.ctrlKey && (e.which == 85)) {
        e.preventDefault();

        return false;

    }

});


/*
$(document).ready(function () {
    $("body").on("contextmenu", function (e) {
        return false;
    });

});
 && (e.which == 85)) {
        e.preventDefault();

        return false;

    }

});*/
