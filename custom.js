$(document).ready(function(){
  $("a").click(function(){
   alert("Hello world!");
 });
});

$(document).ready(function(){
  $("#orderedlist li:last").hover(function(){
    $(this).addClass("green");
}, function(){
    $(this).removeClass("green");
});
  $("#orderedlist > li").addClass("blue");
});
