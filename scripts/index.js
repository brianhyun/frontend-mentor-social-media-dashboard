$("label").click(function(event) {
  if (event.target.checked == true) {
    // light mode activated
    // add light mode styles
    $("link[href='css/styles-dark-mode.css']").attr("href", "css/styles-light-mode.css");
  } else {
    // dark mode activated
    // remove light mode styles
    $("link[href='css/styles-light-mode.css']").attr("href", "css/styles-dark-mode.css");
  }
});
