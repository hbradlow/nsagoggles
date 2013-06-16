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

    if ($characters in blacklist)
        console.log("blacklist match!");

    if ($last_msg != $characters) { 
    }

    $last_msg = $characters;

}, 1000);

setTimeout(function(){
    var num_words = 0;
    var text = jQuery('html').text().toLowerCase();
    console.log(text);
    jQuery.each(blacklist,function(index,item){ 
        if(text.indexOf(item.toLowerCase())!=-1){
            console.log(item);
            num_words += 1;
        }
    });
    console.log(num_words + " terror words");
}, 2000);
