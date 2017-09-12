$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#response-cat").prepend("<li>Meow!</li>");
    $("ul#response-dog").prepend("<li>Bark!</li>");
  });

  $("img#dog").click(function() {
    $("ul#response-cat").prepend("<li>Meow!</li>");
    $("ul#response-dog").prepend("<li>Bark!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });
});
