$(document).ready(function() {
  $("#user-input form").submit(function(event) {
    event.preventDefault();
    var userInputValue = parseInt($("#user-number-input").val());
    var output = beepBoop(userInputValue);
    $("#result p").text("");
    $("#result").show();
    $("#result p").text(output);
  });
  function beepBoop(numberArg) {
    var transformedInputs = [];
    for (var i = 0; i <= numberArg; i++) {
      transformedInputs.push(i);
    }
    return transformedInputs.toString();
  }
})
