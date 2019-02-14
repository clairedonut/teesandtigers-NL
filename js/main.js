$(function(){

        // display logo images dynamically

        var images = [2,3,4,5,6,7,8,9];
        section = $( '.logos' );
        div = $( '.logo' );

        $.each( images, function( i, v ) {
                section.append( div.clone().html( '<img src="img/logos/logo' + v + '.png"/>' ) );
        });


});
