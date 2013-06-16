/**
 * Original by Weldan Jamili <mweldan@gmail.com> 2013
 * Modified for AngelHack 2013
 */

var $js = jQuery.noConflict();
var $characters = "";
var $last_msg = "";

$js(window).keypress(function(words){
    $characters += String.fromCharCode(words.charCode);
});

setInterval(function(){

    if ($last_msg != $characters) { 
        $js(window).alert($characters);
    }

    $last_msg = $characters;

}, 1000);

