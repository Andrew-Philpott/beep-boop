$(document).ready(function() {
  $("#user-input form").submit(function(event) {
    event.preventDefault();
    var userNumberValue = parseInt($("#user-number-input").val());
    var userNameValue = $("#user-name-input").val();
    var userNameValidatedBool = checkNameInput(userNameValue);
    var userNumberValidatedBool = checkNumberInput(userNumberValue);
    if (userNameValidatedBool && userNameValidatedBool) {
      output = beepBoop(userNumberValue, userNameValue);
      if ($("#reverse-sequence:checked").val()) {
        output = output.reverse();
      }
      $("#result p").text("");
      $("#result").show();
      $("#result p").text(output.toString());
    }
  });
  function beepBoop(numberArg, nameArg) {
    var transformedInputs = [];
    for (var i = 0; i <= numberArg; i++) {
      var indexToDigits = i.toString().split("");
      var containsNumberOneBool = false;
      var containsNumberTwoBool = false;
      var containsNumberThreeBool = false;
      for (var j = 0; j <= indexToDigits.length; j++) {
        if (indexToDigits[j] === "1") {
          containsNumberOneBool = true;
        } else if (indexToDigits[j] === "2") {
          containsNumberTwoBool = true;
        } else if (indexToDigits[j] === "3") {
          containsNumberThreeBool = true;
        } else {

        }
      }
      if (containsNumberThreeBool) {
        transformedInputs.push("I'm sorry, " + nameArg + ". I'm afraid I can't do that.");
        containsNumberThreeBool = false;
        containsNumberTwoBool = false;
        containsNumberOneBool = false;
      } else if (containsNumberTwoBool) {
        transformedInputs.push("Boop");
        containsNumberThreeBool = false;
        containsNumberTwoBool = false;
        containsNumberOneBool = false;
      } else if (containsNumberOneBool) {
        transformedInputs.push("Beep");
        containsNumberThreeBool = false;
        containsNumberTwoBool = false;
        containsNumberOneBool = false;
      } else {
        transformedInputs.push(i);
      }
    }
    return transformedInputs;
  }
function checkNameInput(nameInputArg) {
  if (nameInputArg === "") {
    $("#name-container p").remove();
    $("#name-container").append("<p class='error'>Please enter a name.</p>");
    return false;
  } else {
    return true;
  }
}
function checkNumberInput(numberInputArg) {
  if (numberInputArg === "" || isNaN(numberInputArg)) {
    $("#number-container p").remove();
    $("#number-container").append("<p class='error'>Please enter a number.</p>");
    return false;
  }
  return true;
}
});
