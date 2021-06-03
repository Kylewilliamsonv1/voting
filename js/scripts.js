$(document).ready() {
  const nameInput = $("input#name").val();
  const ageInput = $("input#age").val();

  $(".name").text(nameInput);
  $(".age").text(ageInput);

  if (age >= 18) {
    $('#overage').show();
  } else {
    $('#underage').show();
  }
});



