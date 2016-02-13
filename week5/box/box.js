// A $( document ).ready() block.
$( document ).ready(function() {

    var box = $(".box");

    // var eases = ['easeOutQuad', 'easeOutSine', 'easeInOutElastic', 'swing'];

    box.on('click', function(event){

        // console.log(this);
    //     alert("Congratulations! You've clicked on the box");
    // });

    var el = $(this);

        el.animate({
            'margin-left': 900,
            'background-color' : 'red'
        }, 3000, 'easeOutSine', function oncomplete(){
            el.css({
                'margin-left': 20
            });
        });

    });

});




// box.animate({
//     'margin-left': 900,
//     'background-color' : 'red'
// }, 3000);
//
// box.css({
//     'background-color' : 'red'
// });
// });
// });


// alternative method to line 1 (does exactly the same thing)

// $(function(){
//
// });
