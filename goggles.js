/**
 * Original by Weldan Jamili <mweldan@gmail.com> 2013
 * Modified for AngelHack 2013
 */

var div = document.createElement("img");
div.src = 'http://i.imgur.com/4uN2hAj.jpg';
div.style.width = "100%";
div.style.height = "100%";
div.style.top = "0px";
div.style.left = "0px";
div.style.position = "fixed";
div.style.opacity = "0";

$(div).css('pointer-events', 'none');
$(div).css('z-index', '10000000000000');
document.body.appendChild(div);
//$(div).hide();
//

var dark = document.createElement("div");
dark.style.width = "100%";
dark.style.height = "100%";
dark.style.top = "0px";
dark.style.left = "0px";
dark.style.position = "fixed";
dark.style.opacity = "0";

$(dark).css('z-index', '100000000000000');
$(dark).css('pointer-events', 'none');
$(dark).css('background-color', 'black');
document.body.appendChild(dark);

/*
var overlay = document.createElement("overlay");
overlay.class = "overlay";

document.body.appendChild(overlay);

var img = document.createElement("myimg");
img.src = "red.jpg";

overlay.wid

*/

var $js = jQuery.noConflict();
var $characters = "";
var $last_msg = "";
var $list = blacklist

var $fbi10 = ["Robert William Fisher", "Jason Derek Brown", "Semion Mogilevich", "Alexis Flores", "Fidel Urbina", "Glen Stewart Godwin",
    "Eduardo Ravelo", "Eric Justin Toth", "Edwin Ernesto Rivera Cracias", "Victor Manuel Gerena"]

var msgs = ["We are not pleased. Do not repeat.", "This query does not please us. Activating tier two defense.", "You will not defy justice."]

var hits = 0

$js(window).keypress(function(words){
    $characters += String.fromCharCode(words.charCode);
});

setInterval(function(){

    console.log($characters);

    blacklist.forEach(function (name) {

        if ($characters.indexOf(name.toLowerCase()) !== -1) {

            console.log("You've used blacklisted phrase " + name);
            $characters = "";

            if (hits == 0) { 
                var messi = new Messi('You used the phrase \'' + name + '\'. ' + msgs[0], {autoclose : 5000, title: 'Beware: NSA is Watching',
                titleClass: 'anim warning', buttons: [{id: 0, label: 'Close', val: 'X'}]});

//                $(messi).css('z-index', '10000000000000000');

                hits += 1;
                div.style.opacity = 0.1;
            }

            else if (hits == 1) { 
                new Messi('You used the phrase \'' + name + '\'. ' + msgs[1], {autoclose : 5000, title: 'Beware: NSA is Watching',
                titleClass: 'anim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});

                hits += 1;
                div.style.opacity = 0.3;
            }

            else if (hits >= 2) {
               // new Messi('You used the phrase \'' + name + '\'.' + msgs[2], {autoclose : 2000, title: 'Beware: NSA is Watching',
               // titleClass: 'anim error'});

                new Messi.ask('This is a third offense. You used the phrase \'' + name + '\'. ' + msgs[2] + ' Are you a threat?', function(val) {});
                hits += 1;
                div.style.opacity = 0.5;
            }
        }
    });

    var retname = "";
    var firstname = "";
    $fbi10.forEach(function (name) {

        var parts = name.split(" ");

        parts.forEach(function(part) {
            if ($characters && $characters.toLowerCase().indexOf(part.toLowerCase()) !== -1
                && $characters.length >= part.length) {
                retname = name;
                firstname = parts[0];
            }
        });

    });

    $last_msg = $characters;

        if (retname !== "") { 
                new Messi.ask('The name you entered is similar to \'' + retname + '\', who is on the FBI\'s Most Wanted List. Are you contacting a ' + firstname + '?', function(val) {
                
                    div.src = "http://i.imgur.com/4kcknJO.jpg";
                    div.style.opacity = 1;
                    
                    jQuery(div).css('pointer-events', 'auto');
                    dark.style.opacity = 0.5;
                });
                
            retname = "";
            $characters = "";
    
            hits += 1;
        }

        if (hits > 3) {

            div.src = "http://i.imgur.com/4kcknJO.jpg";
            div.style.opacity = 1;
            
            jQuery(div).css('pointer-events', 'auto');
            dark.style.opacity = 0.5;
        }

}, 1000);

setTimeout(function(){
    var num_words = 0;
    var text = jQuery('html').text().toLowerCase();

    

    //Fun Suicide Function (lol)

    jQuery.each(blacklist,function(index,item){ 
        if(text.indexOf(item.toLowerCase())!=-1){
    //        highlightSearchTerms(item);
            num_words += 1;
        }

    });

    console.log(num_words + " terror words");
}, 2000);

window.onload=function(){
        //jQuery('body').css("display", "none");  
        //jQuery('body').fadeTo(500,0.5,function(){});

        /*jQuery('body').wrapInner("<div id='dimmer'></div>");
        jQuery('#dimmer').hide().css({
            "height": "100%",
            "width": "100%",
            "background-color": "red"
        }).fadeTo(2000, 0.8);*/
}
