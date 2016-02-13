

$(document).ready(function(){

    for(var i=97; i <= 122; i++){
        var letter = String.fromCharCode(i);
        $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo('#guesses');
    }
});
