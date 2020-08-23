console.log("CONNNECTED");

// Check off specific Todos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// Click on  to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

// adding the todos
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        const todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText +"</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})