var url = window.location.search;

let params = new URLSearchParams(url);

var Ingredients = []
var RecipeSteps = []
var RecipeName = []
var RecipeAuthor = []
var PreparationTime = []
var CookingTime = []

var allIngredientParams = params.getAll('ingredient')
var allRecipeSteps = params.getAll('recipeStep');

var recipeName = params.getAll('recipeName')
var recipeAuthor = params.getAll('authorName');

var prepTime = params.getAll('prepTime')
var cookTime = params.getAll('cookTime');

for (var parameter in allIngredientParams) {
    Ingredients.push(allIngredientParams[parameter])
}

for (var parameter in allRecipeSteps) {
    RecipeSteps.push(allRecipeSteps[parameter]);
}

for (var parameter in recipeName) {
    RecipeName.push(recipeName[parameter])
}

for (var parameter in recipeAuthor) {
    RecipeAuthor.push(recipeAuthor[parameter]);
}

for (var parameter in prepTime) {
    PreparationTime.push(prepTime[parameter])
}

for (var parameter in cookTime) {
    CookingTime.push(cookTime[parameter]);
}

console.log(Ingredients);
console.log(RecipeSteps);

console.log(RecipeName);
console.log(RecipeAuthor);

console.log(PreparationTime);
console.log(CookingTime);