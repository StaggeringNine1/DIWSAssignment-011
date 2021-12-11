var openAddIngredientDiv = document.querySelectorAll("#OpenIngredientAdd");
var inputIngredientAreaDiv = document.getElementById("inputIngredientDiv");

var addIngredientButton = document.getElementById("AddIngredientButton");
var cancelIngredientButton = document.getElementById("CancelIngredientButton");

var measurementOption = document.getElementById("measurementOption");
var ingredientNameEntry = document.getElementById("ingredientName");
var ingredientAmountEntry = document.getElementById("ingredientAmount");

var alertCallout = document.getElementById("AlertCallout");
var calloutText = document.getElementById("CalloutText");

var ingredientTemplate = document.getElementById("IngredientTemplate");

var ingredientsList = document.getElementById("ingredientsList");

openAddIngredientDiv.forEach(button => {
    button.onclick = function() {
        if (inputIngredientAreaDiv.style.display == "none") {
            inputIngredientAreaDiv.style.display = "block";
        }
    }
})

cancelIngredientButton.onclick = function () {
    inputIngredientAreaDiv.style.display = "none";

    ingredientName.value = null;
    ingredientAmount.value = null;
}

addIngredientButton.onclick = function () {
    var ingredientName = ingredientNameEntry.value;
    var ingredientAmount = ingredientAmountEntry.value;

    var selectedMeasurement = measurementOption.options[measurementOption.selectedIndex].value;

    var allowedToContinue = true;

    if (ingredientName == "") {
        calloutText.textContent = "Ingredient can't be blank!";
        allowedToContinue = false;
    }

    if (ingredientAmount == "") {
        calloutText.textContent = "Amount can't be blank!";
        allowedToContinue = false;
    }

    if (allowedToContinue) {
        var ingredientUl = ingredientTemplate.cloneNode();

        ingredientUl.textContent = `${ingredientAmount} ${selectedMeasurement} ${ingredientName}`

        ingredientsList.appendChild(ingredientUl);
        ingredientUl.style.display = "block";

        ingredientUl.setAttribute("name", "RecipeIngredient")

        inputIngredientAreaDiv.style.display = "none";

        ingredientNameEntry.value = null;
        ingredientAmountEntry.value = null;
    }
    else {
        alertCallout.style.display = "block";

        setTimeout(() => {
            alertCallout.style.display = "none";
        }, 5000);
    }
}