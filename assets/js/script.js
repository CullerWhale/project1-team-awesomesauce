

M.AutoInit();


// document.addEventListener

var listEl = document.getElementById('dropdown1');
var categorySelection; 
listEl.addEventListener("click", function(event) {
    console.log(typeof(event.target.value));
    categorySelection = event.target.value;

    localStorage.setItem('categoryNumber', JSON.stringify(categorySelection));
});

var numberOfCategory = 9
var categoryNames = ["General Knowledge", "Entertainment: Books", "Entertainment: Film", "Entertainment: Music", "Entertainment: Musicals and Theaters",
"Entertainment: Television", "Entertainment: Video Games", "Entertainment: Board Games", "Science and Nature", "Science: Computers", "Science: Mathematics", "Mythology", "Sports",
"Geography", "History", "Politics", "Art", "Celebrities", "Animals", "Vehicles", "Entertainment: Comics", "Science: Gadgets", "Entertainment: Japanese Anime and Manga",
"Entertainment: Cartoons and Animations"]; 

for (let index = 0 ; index < 24; index++) {
    const dropdownItemEl = document.createElement('li');
    dropdownItemEl.setAttribute("value", numberOfCategory);
    dropdownItemEl.textContent = categoryNames[index];
    listEl.appendChild(dropdownItemEl);
    numberOfCategory++;
}

