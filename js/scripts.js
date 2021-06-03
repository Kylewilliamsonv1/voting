$(document).ready(function() {
    const ageInput = parseInt(prompt("Enter you age"));
    if (ageInput >= 18) {
      $('#overage').show();
    } else {
      $('#underage').show();
    }
});



