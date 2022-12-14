$(document).ready(function(){
    //hides dropdown content
    $(".pet").hide();

    //shows by default the first pet
    $(".pet").first().show();

    //listen to dropdown for change
    $("#user-pets").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".pet").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".pet").hide();
            }
        });
    })
});