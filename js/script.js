const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

var cat = {complain: function(){
    console.log("Meow!");
}}
cat.complain();


// Question 2

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3 

heading.style.fontSize = "2em";

// Question 4

heading.classList = "Subheading";

// Question 5

var paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(p){
    p.style.color = "red";
})

// QUestion 6

var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML =  "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7


function henrik(list) {
    for(noe of list){
        console.log(noe.name);
    }
}

henrik(cats);


// Question 8

var catContainer = document.querySelector(".cat-container");
function createCats(Cats) {
    for(katt of cats){
        if(katt.age === undefined){
                katt.age = "Age unknown"
            }
        var katter =`<div>
            <h5> ${katt.name}:</h5>
            <p> ${katt.age}</p>
            </div>`;

            
            catContainer.innerHTML += katter;
    }
    
}

createCats(cats);