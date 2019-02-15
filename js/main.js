$(function(){

        // display logo images dynamically

        section = $( '.logos' );
        div = $( '.logo' );

        section.each(function( index ) {

                for (i = 2; i < 10; i++) {
                        section.append( div.clone().html( '<img src="img/logos/logo' + i + '.png"/>' ) );
                };
        });

        // display collection images dynamically

        var img = [1,2,3,4,5,6,7,8];
        collection = $( '.collection' );

        $.each( img, function( i, v ) {
                collection.append( '<img src="img/catalogue/img' + v + '.jpg"/>' );
        });

        // display footer service icons & text dynamically

        var icon = [1,2,3];
            tags = ["Livraisons gratuites", "Retour gratuits", "Service Client"];
        footer = $( 'footer aside' );
        aside = $( 'aside' );

        $.each( icon, function( i, v ) {
                footer.append( aside.clone().html( '<img src="img/icons/icon' + v + '.jpg"/> <p>' + tags[i] + '</p>' ) );
        });

        // display social media icons dynamically

        link = ["instagram.com", "facebook.com", "twitter.com", "youtube.com"]

        $( ".social" ).each(function( index ) {

                for (i = 0; i < 4; i++) {
                        $(this).append('<a href="' + link[i] + '"><img src="img/sm/img' + i + '.jpg"/></a>');
                };
        });


});
