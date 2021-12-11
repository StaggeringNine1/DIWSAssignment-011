var showRecipeButton = document.getElementById("ShowRecipe");


showRecipeButton.onclick = function() {
    var url = '../saveRecipe.html'

    let params = new URLSearchParams(url);

    var IngredientsAdded = document.getElementsByName("RecipeIngredient");

    for (let item in IngredientsAdded) {
        if (IngredientsAdded[item].textContent != undefined) {
            params.append("ingredient", IngredientsAdded[item].textContent)
        }
    }

    var RecipeStepsAdded = document.getElementsByName("RecipeStep");

    for (let item in RecipeStepsAdded) {
        if (RecipeStepsAdded[item].textContent != undefined) {
            params.append("recipeStep", RecipeStepsAdded[item].textContent)
        }
    }

    var recipeName = document.getElementById("recipeNameInput");
    var authorName = document.getElementById("authorNameInput");

    var preparationTime = document.getElementById("preparationTimeInput");
    var cookingTime = document.getElementById("cookingTimeInput");

    params.append("recipeName", recipeName.value)
    params.append("authorName", authorName.value)
    params.append("prepTime", preparationTime.value)
    params.append("cookTime", cookingTime.value)

    var oldUrl = url

    url = url + params
    url = url.replace(oldUrl, "")
    url = url.replace("..%2F", "../")
    url = url.replace("=&", "?")

    if (recipeName.value == "" || authorName.value == "" || preparationTime.value == "" || cookingTime.value == "") {

    }
    else {
        if (params.getAll("recipeStep").length == 0 || params.getAll("ingredient").length == 0) {

        } 
        else {
            window.open(url)
        }
    }

    
}