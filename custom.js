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

 $(document).ready(function() {
   // use this to reset a single form
   $("#reset").click(function() {
     $("form")[0].reset();
   });
 });



