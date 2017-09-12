$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#response-cat").prepend("<li>Meow!</li>");
    $("ul#response-dog").prepend("<li>Bark!</li>");
    $("ul").children("li").click(function() {
    $("li").remove();
    });
  });

  $("img#dog").click(function() {
    $("ul#response-cat").prepend("<li>Meow!</li>");
    $("ul#response-dog").prepend("<li>Bark!</li>");
    $("ul").children("li").click(function() {
    $("li").remove();
    });
  });
});
