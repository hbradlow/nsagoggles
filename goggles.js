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

    blacklist.forEach(function (name) {

        if ($characters.indexOf(name) !== -1) {

            console.log("You've used blacklisted phrase " + name);
            $characters = "";
        }
    });

    $last_msg = $characters;

}, 1000);

setTimeout(function(){
    var num_words = 0;
    var text = jQuery('html').text().toLowerCase();

    

    //Fun Suicide Function (lol)

    jQuery.each(blacklist,function(index,item){ 
        if(text.indexOf(item.toLowerCase())!=-1){
            console.log(item);
            num_words += 1;
        }

    });
    console.log(num_words + " terror words");
}, 2000);

window.onload=function(){
 
   jQuery('<div/>', {
        id: 'foo',
        position: 'absolute',
        height: "1000px",
        width: "100%"
    }).appendTo(document.body);

   jQuery('foo').css('background-color','red');
        //jQuery('body').css("display", "none");  
        //jQuery('body').fadeTo(500,0.5,function(){});

        /*jQuery('body').wrapInner("<div id='dimmer'></div>");
        jQuery('#dimmer').hide().css({
            "height": "100%",
            "width": "100%",
            "background-color": "red"
        }).fadeTo(2000, 0.8);*/
}
