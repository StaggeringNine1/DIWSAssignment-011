const queryString = window.location.search;

const urlParameters = new URLSearchParams(queryString)

const recipeFilter = urlParameters.get("recipe")

var RecipeName = document.getElementById("RecipeName")
var PrepTime = document.getElementById("PrepTime")
var CookTime = document.getElementById("CookTime")
var RecipeYield = document.getElementById("YieldOfRecipe")

var AuthorName = document.getElementById("AuthorName")
var AuthorImage = document.getElementById("AuthorImage")
var AuthorSocialMedia = document.getElementById("AuthorSocialMedia");
var FacebookSocial = document.getElementById("facebook")
var TwitterSocial = document.getElementById("twitter")
var InstagramSocial = document.getElementById("instagram")

var RecipeImage = document.getElementById("RecipeImage")

var IngrediantsTabs = document.getElementById("recipe-ingrediants-tabs")
var IngrediantsMain = document.getElementById("IngrediantsMain")

var RecipeTab = document.getElementById("RecipeTab")

var ConversionButton = document.getElementById("yes-no")
var OunceSwitch = document.getElementById("oz")
var GramSwitch = document.getElementById("g")

var selectedMeasurement = "Gram"

var chosenRecipe;

ConversionButton.onclick = function() {
    if (ConversionButton.checked) {
        selectedMeasurement = "Ounce"
    }
    else 
    {
        selectedMeasurement = "Gram"
    }

    var AllIngrediants = document.getElementsByName("Ingrediant")

    for (let item in AllIngrediants){
        if (AllIngrediants[item].textContent != undefined) {
            var splitItems = AllIngrediants[item].textContent.split(" ")

            if (selectedMeasurement == "Ounce") {
                if (splitItems[2] == "g") {
                    splitItems[1] = Math.round(splitItems[1] / 28.35)
                    splitItems[2] = "oz"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[3] == "g") {
                    splitItems[2] = Math.round(splitItems[2] / 28.35)
                    splitItems[3] = "oz"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[2] == "ml") {
                    splitItems[1] = Math.round(splitItems[1] / 29.574)
                    splitItems[2] = "floz"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[3] == "ml") {
                    splitItems[2] = Math.round(splitItems[2] / 29.574)
                    splitItems[3] = "floz"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
            }
            else if (selectedMeasurement == "Gram") {
                if (splitItems[2] == "oz") {
                    splitItems[1] = Math.round(splitItems[1] * 28.35)
                    splitItems[2] = "g"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[3] == "oz") {
                    splitItems[2] = Math.round(splitItems[2] * 28.35)
                    splitItems[3] = "g"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[2] == "floz") {
                    splitItems[1] = Math.round(splitItems[1] * 29.574)
                    splitItems[2] = "ml"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
                else if (splitItems[3] == "floz") {
                    splitItems[2] = Math.round(splitItems[2] * 29.574)
                    splitItems[3] = "ml"

                    AllIngrediants[item].textContent = splitItems.join(" ")
                }
            }

            
        }
        
    }
}


function GenerateIngrediant(recipe, ingrediantName, count) {
    var link = document.createElement("li")
        
    if (count == 0) {
        link.className = "tabs-title is-active"
    }
    else
    {
        link.className = "tabs-title"
    }

    var idToLink = `#${ingrediantName.replace(/ /g, "")}`

    var a = document.createElement("a")
    a.className = "accordianTabTitle"
    a.style.fontSize = "large"
    a.ariaSelected = true
    a.id = idToLink + "Link"
    a.textContent = ingrediantName
    a.setAttribute("role", "tab")

    a.href = idToLink

    link.appendChild(a)
    link.id = idToLink.replace("#", "") + "Button"
    link.setAttribute("role", "presentation")

    IngrediantsTabs.appendChild(link)

    var div = document.createElement("div")
        
    if (count == 0) {
        div.className = "tabs-panel is-active"
    }
    else {
        div.className = "tabs-panel"
    }

    div.id = idToLink.replace("#", "")
    div.setAttribute("role", "tabpanel")

    var h3 = document.createElement("h3")
    h3.style.fontFamily = "serif"
    h3.textContent = `${ingrediantName} Ingrediants`

    div.appendChild(h3)

    recipe.ingredients[ingrediantName].forEach(ingrediant => {
        var p = document.createElement("p")
        p.setAttribute("name", "Ingrediant")

        p.textContent = "• "
        if (ingrediant.size != null) {
            p.textContent += ingrediant.size + "x "
        }

        if (ingrediant.weight != null) {
            if (selectedMeasurement == "Ounce" && ingrediant.type == "g") {
                ingrediant.weight = ingrediant.weight / 28.35
            }

            p.textContent += ingrediant.weight + " "
        }

        if (ingrediant.type != null) {
            p.textContent += ingrediant.type + " "
        }

        if (ingrediant.ingredient != null) {
            p.textContent += ingrediant.ingredient + " "
        }

        if (ingrediant.note != null) {
            p.textContent += ingrediant.note
        }

        div.appendChild(p)
    })

    IngrediantsMain.appendChild(div)
}

function GenerateRecipeTab(step, count) {
    var link = document.createElement("li")
    var a = document.createElement("a")

    if (count == 0) {
        a.className = "is-active"
    }

    a.href = "#"
    a.textContent = `Step ${count + 1}`

    var ul = document.createElement("ul")
    
    if (count == 0) {
        ul.className = "menu vertical nested is-active"
    }
    else {
        ul.className = "menu vertical nested"
    }

    var p = document.createElement("p")
    p.textContent = step

    ul.appendChild(p)

    link.appendChild(a)
    link.appendChild(ul)

    RecipeTab.appendChild(link)
}

function CreateAuthorSegment(recipe) {
    $.getJSON("./js/authors.json", function(data) {
        data.forEach(author => {
            if (author.author == recipe.author) {
                AuthorName.textContent = author.author

                if (author.image) {
                    AuthorImage.src = author.image
                    AuthorImage.hidden = false
                }
                else {
                    AuthorImage.hidden = true
                }
                

                if (author.facebook) {
                    FacebookSocial.href = author.facebook
                    FacebookSocial.hidden = false
                }
                else
                {
                    FacebookSocial.hidden = true
                }

                if (author.twitter) {
                    twitter.href = author.twitter
                    twitter.hidden = false
                }
                else
                {
                    twitter.hidden = true
                }

                if (author.instagram) {
                    InstagramSocial.href = author.instagram
                    InstagramSocial.hidden = false
                }
                else
                {
                    InstagramSocial.hidden = true
                }

                AuthorSocialMedia.style.display = "block"
            }
        })
    })
}

function CreateRecipePage(recipe) {
    RecipeName.textContent = recipe.name
    PrepTime.textContent = recipe.prepTime
    CookTime.textContent = recipe.cookTime
    RecipeYield.textContent = recipe.yield    

    RecipeImage.src = recipe.image

    var count = 0;

    for (let ingrediantName in recipe.ingredients) {
        GenerateIngrediant(recipe, ingrediantName, count)
        count++
    }

    count = 0;

    recipe.steps.forEach(step => {
        GenerateRecipeTab(step, count)
        count++
    })
}

$.getJSON("./js/recipes.json", function(data) {
    data.forEach(recipe => {
        if (recipe.key == recipeFilter) {
            var pageTitle = document.createElement("title")
            pageTitle.textContent = recipe.name

            document.getElementsByTagName("head")[0].appendChild(pageTitle)

            chosenRecipe = recipe
            CreateRecipePage(recipe)
            CreateAuthorSegment(recipe)
        }
    })
})

var script = document.createElement("script")
script.src = "js/app.js"

document.getElementsByTagName("body")[0].appendChild(script)