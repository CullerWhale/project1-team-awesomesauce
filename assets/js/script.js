

M.AutoInit();


// document.addEventListener

var listEl = document.getElementById('dropdown1');
var categorySelection; 
listEl.addEventListener("click", function(event) {
    console.log(typeof(event.target.value));
    categorySelection = event.target.value;

    localStorage.setItem('categoryNumber', JSON.stringify(categorySelection));
});

var numberOfCategories = 9
var categoryNames = ['all of the names']; 

for (let index = 0 ; index < 24; index++) {
    const element = document.createElement('li');
    
    numberOfCategories++;
}

