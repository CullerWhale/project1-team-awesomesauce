M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        onCloseStart: function() {
            console.log(1);
        }
    }
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});

var instance = M.Dropdown.getInstance(elem);
instance.open();

// document.addEventListener('click', clickHandler);
