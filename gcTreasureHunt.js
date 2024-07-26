document.addEventListener("DOMContentLoaded", function(){
  console.log('dom loaded');
    var wpcf7Elm = document.querySelector( '.wpcf7-form' );
    wpcf7Elm.addEventListener( 'submit', function( event ) {
        var incorrectSpan = document.querySelector( 'wpcf7-not-valid-tip' );
    }, false );
})