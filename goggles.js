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

    console.log($characters);
    console.log("hello");

    if ($last_msg != $characters) { 
    }

    $last_msg = $characters;

}, 1000);

