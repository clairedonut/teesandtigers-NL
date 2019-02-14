$(function(){

        // display logo images dynamically

        var images = [2,3,4,5,6,7,8,9];
        section = $( '.logos' );
        div = $( '.logo' );

        $.each( images, function( i, v ) {
                section.append( div.clone().html( '<img src="img/logos/logo' + v + '.png"/>' ) );
        });

        // display collection images dynamically

        var img = [1,2,3,4,5,6,7,8];
        collection = $( '.collection' );

        $.each( img, function( i, v ) {
                collection.append( '<img src="img/catalogue/img' + v + '.jpg"/>' );
        });
});
