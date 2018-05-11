$("#add-burger").on("submit", function(event){
    event.preventDefault();

    var newBurger=$(this).data("burgers-added").val();
    $.ajax({
        method:"PUT",
        url:"/burgers/" + burger_id
    }).then(function(data){
        location.reload();
    });
});