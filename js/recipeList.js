const queryString = window.location.search;

const urlParameters = new URLSearchParams(queryString)

const recipeFilter = urlParameters.get("recipes")

if (recipeFilter == "seasonal") {
    var seasonalElementContent = document.getElementById("seasonal-recipes");
    var allRecipesElementContent = document.getElementById("all-recipes");

    var seasonalElementTitle = document.getElementById("seasonalRecipesTabTitle");
    var allRecipesElementTitle = document.getElementById("allRecipesTabTitle");

    var seasonalLink = document.getElementById("seasonalLink");
    var allLink = document.getElementById("allLink");

    seasonalElementContent.className = "tabs-panel is-active"
    allRecipesElementContent.className = "tabs-panel"

    seasonalElementTitle.className = "tabs-title is-active"
    allRecipesElementTitle.className = "tabs-title"

    seasonalLink.ariaSelected = true;
    allLink.ariaSelected = false;
}
else if (recipeFilter == "allrecipes")
{
    var seasonalElementContent = document.getElementById("seasonal-recipes");
    var allRecipesElementContent = document.getElementById("all-recipes");

    var seasonalElementTitle = document.getElementById("seasonalRecipesTabTitle")
    var allRecipesElementTitle = document.getElementById("allRecipesTabTitle")

    var seasonalLink = document.getElementById("seasonalLink");
    var allLink = document.getElementById("allLink");

    allRecipesElementContent.className = "tabs-panel is-active"
    seasonalElementContent.className = "tabs-panel"

    allRecipesElementTitle.className = "tabs-title is-active"
    seasonalElementTitle.className = "tabs-title"

    seasonalLink.ariaSelected = false;
    allLink.ariaSelected = true;
}