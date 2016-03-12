// $(document).ready(function(){
//     $(".box").click(function(){
//         $(".box").removeClass("open");
//         $(this).addClass('open');
//     });
// });

$(document).ready(function(){
    $(".box").click(function(){
        $('.box').animate({
            height: 40,
        });
        $(this).animate({
            height: 200,
        });
    });
});
