$(document).ready(function() {
  var FONT_MODIFIER = 0.9;
  var fontSize = (FONT_MODIFIER * parseInt($("#profile-links .logo-space").width()))+"px";
//  console.log(fontSize);
  $("#profile-links .my-icon").css('font-size', fontSize);
});