$(document).ready(function(){
  $("a").click(function(){
   alert("Hello world!");
 });
});

$(document).ready(function(){
  $("#orderedlist").addClass("red");
  $("#orderedlist > li").addClass("blue");
});
