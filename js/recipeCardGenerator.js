//const url = recipes

const recipeNames = [
    "Test1",
    "Test2",
    "Test3",
    "Test4"
]

const cardWidth = "80%";
const cardHeight = "95%";

var element = document.getElementById("recipeCardHolder")

// let request = new XMLHttpRequest();

// request.open('GET', url, true);

// request.onload = function() {
    
// }

//request.send();

$.getJSON("./js/recipes.json", function(data) {
    data.forEach(recipe => {
        var a  = document.createElement("a")
        a.href = `recipePage.html?recipe=${recipe.key}`

        var cell = document.createElement("div");
        cell.setAttribute("class", "cell")
    
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        card.style.width = cardWidth;
        card.style.height = cardHeight;
    
        var cardDivider = document.createElement("div");
        cardDivider.setAttribute("class", "card-divider");
        cardDivider.textContent = recipe.name;
    
        var image = null;

        if (recipe.image) {
            image = document.createElement("img");
            image.src = recipe.image;
            image.style.width = "100%";
            image.style.height = "100%";
            image.style.objectFit = "cover";
        }
    
        var cardSection = document.createElement("div");
        cardSection.setAttribute("class", "card-section");

        var p = document.createElement("p");
        p.textContent = `Preparation Time: ${recipe.prepTime}`;

        var p1 = document.createElement("p");
        p1.textContent = `Cooking Time: ${recipe.cookTime}`;

        var desc = document.createElement("p");
        
        recipe.description.forEach(line => {
            desc.textContent += line + "\n\n"
        })

        desc.textContent = desc.textContent.substring(0, 300) + "..."

        cardSection.appendChild(p);
        cardSection.appendChild(p1);
        cardSection.appendChild(desc);
    
        cell.appendChild(card);
    
        card.appendChild(cardDivider);

        if (image) {
            card.appendChild(a)
            a.appendChild(image)
        }
        
        card.appendChild(cardSection);

        if (image)
        {
            element.appendChild(cell);
        }
        
    })
})

//var data = JSON.parse(url);

//if (request.status >= 200 && request.status < 400) {
    
// }
// else
// {

// }