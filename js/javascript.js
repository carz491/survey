$(document).ready(function() {
  $("#blankSurvey").submit(function(event){
    var name1Input = $("input#name").val();
    var foodInput = $("input#food").val();
    var colorInput = $("input#color").val();
    var movieInput = $("input#movie").val();
    var bookInput = $("input#book").val();
    var animalInput = $("input#animal").val();

    $(".name").text(name1Input);
    $(".food").text(foodInput);
    $(".color").text(colorInput);
    $("span.color").css("background-color", colorInput)
    $(".book").text(bookInput);
    $(".movie").text(movieInput);
    $(".animal").text(animalInput);

    $("#survey").show();
    event.preventDefault();

  });
});
