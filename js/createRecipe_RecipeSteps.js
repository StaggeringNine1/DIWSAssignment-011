var openAddRecipeDiv = document.querySelectorAll("#OpenRecipeStepAddition");
var inputAreaDiv = document.getElementById("inputRecipeStepDiv");

var addStepButton = document.getElementById("AddStepButton");
var cancelStepButton = document.getElementById("CancelStepButton");

var stepInput = document.getElementById("stepInfo")

var alertCallout = document.getElementById("StepAlertCallout");
var calloutText = document.getElementById("StepCalloutText");

var stepTemplate = document.getElementById("RecipeStepTemplate");

var stepList = document.getElementById("stepList");

openAddRecipeDiv.forEach(button => {
    button.onclick = function() {
        if (inputAreaDiv.style.display == "none") {
            inputAreaDiv.style.display = "block";
        }
    }
})

cancelStepButton.onclick = function () {
    inputAreaDiv.style.display = "none";

    stepInput.value = null;
}

addStepButton.onclick = function() {
    var stepInfo = stepInput.value;

    var allowedToContinue = true;

    if (stepInfo == "") {
        calloutText.textContent = "You can't have a blank step!"
        allowedToContinue = false;
    }

    if (allowedToContinue) {
        var stepUl = stepTemplate.cloneNode();

        stepUl.textContent = `${stepInfo}`;

        stepList.appendChild(stepUl);
        stepUl.style.display = "block";

        stepUl.setAttribute("name", "RecipeStep");

        inputAreaDiv.style.display = "none";

        stepInput.value = null;
    }
    else {
        alertCallout.style.display = "block";

        setTimeout(() => {
            alertCallout.style.display = "none";
        }, 5000);
    }
}