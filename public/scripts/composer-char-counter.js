$(document).ready(function() {

  $("#tweet-text-field").on("input", function() {
    const textAreaLength = this.value.length;
    const remainingLength = 140 - textAreaLength;
    const elem = $(".counter");

    if (remainingLength < 0) {
      elem.css("color", "red");
    } else {
      elem.css("color", "unset");
    }

    elem.html(remainingLength);
  });
});