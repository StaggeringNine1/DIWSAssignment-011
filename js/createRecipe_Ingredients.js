const queryString = window.location.search;

const urlParameters = new URLSearchParams(queryString);

const parameterFilter = urlParameters.get("recipe");

var openAddIngredientDiv = document.querySelectorAll("#OpenIngredientAdd");
var inputAreaDiv = document.getElementById("inputIngredientDiv");

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
        if (inputAreaDiv.style.display == "none") {
            inputAreaDiv.style.display = "block";
        }
    }
})

cancelIngredientButton.onclick = function () {
    inputAreaDiv.style.display = "none";

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

        inputAreaDiv.style.display = "none";

    ingredientName.value = null;
    ingredientAmount.value = null;
    }
    else {
        alertCallout.style.display = "block";

        setTimeout(() => {
            alertCallout.style.display = "none";
        }, 5000);
    }
}