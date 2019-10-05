$(document).ready(function() {
  $("#result button").click(function() {
    $("#result p").text(reverseString($("#result p").text()));
  });
  $("#user-input form").submit(function(event) {
    event.preventDefault();
    var userInputValue = parseInt($("#user-number-input").val());
    var output = beepBoop(userInputValue);
    $("#result p").text("");
    $("#result").show();
    $("#result p").text(output);
  });
  function reverseString(stringArg) {
    var strings = stringArg.split(",");
    return strings.reverse().toString();
  }
  function beepBoop(numberArg) {
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
        transformedInputs.push("I'm sorry, Dave. I'm afraid I can't do that.");
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
    return transformedInputs.toString();
  }
})
