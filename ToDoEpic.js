
$("ul").on("click", "li", function(){
    //toggles line through and grayed out to do's
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    //deleting to do's
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    //adding new to do's
    if(event.which === 13) {
        let toDoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
        $(this).val("");
    }

});

$("#bruh").on("click", function(){
    //fade in input bar
    $("input[type='text']").fadeToggle();
});