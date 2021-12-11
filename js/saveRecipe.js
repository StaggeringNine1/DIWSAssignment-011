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
    console.log(allRecipeSteps[parameter]);

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

var Template = document.getElementById("Template_Print");

var RecipeNamePrint = document.getElementById("RecipeName_Print");
var AuthorNamePrint = document.getElementById("AuthorName_Print");

var PreparationTimePrint = document.getElementById("PreparationTime_Print");
var CookingTimePrint = document.getElementById("CookingTime_Print");

var IngredientsList = document.getElementById("IngredientList_Print");
var RecipeStepsList = document.getElementById("StepList_Print");

var SaveToPDF = document.getElementById("SaveButton_Print");

RecipeNamePrint.textContent = RecipeName[0];
AuthorNamePrint.textContent = RecipeAuthor[0];

PreparationTimePrint.textContent = `Preparation Time: ${PreparationTime[0]}`;
CookingTimePrint.textContent = `Cooking Time: ${CookingTime[0]}`;


for (let line in Ingredients) {
    var clone = Template.cloneNode();

    clone.textContent = `• ${Ingredients[line]}`;
    
    IngredientsList.appendChild(clone);
    clone.style.display = "block";
}

var RecipeCount = 1;

for (let line in RecipeSteps) {
    console.log(line);

    var clone = Template.cloneNode();

    clone.textContent = `${RecipeCount}: ${RecipeSteps[line]}`;
    
    RecipeStepsList.appendChild(clone);
    clone.style.display = "block";

    RecipeCount++;
}

SaveToPDF.onclick = function() {
    var saveElement = document.getElementById("saveElement");

    var options = {
        margin: 10,
        filename: `${RecipeName[0]} Recipe.pdf`
    }

    html2pdf().set(options).from(saveElement).save();
}