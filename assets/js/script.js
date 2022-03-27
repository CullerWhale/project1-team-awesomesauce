
M.AutoInit();


// document.addEventListener

var listEl = document.getElementById('dropdown1');
var categorySelection; 
listEl.addEventListener("click", function(event) {
    console.log(typeof(event.target.value));
    categorySelection = event.target.value;

    localStorage.setItem('categoryNumber', JSON.stringify(categorySelection));
});
