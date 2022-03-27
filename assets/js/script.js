M.AutoInit();

// document.addEventListener

var listEl = document.getElementById('dropdown1');
var categorySelection; 
listEl.addEventListener("click", function(event) {
    console.log(typeof(event.target.value));
    categorySelection = event.target.value;

    localStorage.setItem('categoryNumber', JSON.stringify(categorySelection));
    
})

// export default {categorySelection}




// document.addEventListener('DOMContentLoaded', function() {
//     // var options = {
//     //     onCloseStart: function() {
//     //         console.log(options[1]);
            
//     //     }
//     // }

//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
    

// });

// var instance = M.Dropdown.getInstance(elem);
// instance.open();


// console.log(instance);
// console.log(options);
// console.log(elem);
// document.addEventListener('click', clickHandler);
