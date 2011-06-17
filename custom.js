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
});

$(document).ready(function(){
  $("#orderedlist").find("li").each(function(i){
  $(this).append(" BAM! "+ i );
  });
});
