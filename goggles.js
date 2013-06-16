/**
 * Original by Weldan Jamili <mweldan@gmail.com> 2013
 * Modified for AngelHack 2013
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
            /*
            jQuery('<div/>', {
                id: 'msg',
                title: 'We Are Watching',
                rel: 'external',
                text: "Beware, you used the banned phrase " + name
            }).fadeOut("slow").appendTo(document.body); 
            */
            if (hits == 0) { 
                new Messi('You used the phrase \'' + name + '\'.' + msgs[0], {autoclose : 5000, title: 'Beware: NSA is Watching',
                titleClass: 'anim warning', buttons: [{id: 0, label: 'Close', val: 'X'}]});

                hits += 1;
            }

            else if (hits == 1) { 
                new Messi('You used the phrase \'' + name + '\'.' + msgs[1], {autoclose : 5000, title: 'Beware: NSA is Watching',
                titleClass: 'anim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});

                hits += 1;
            }

            else if (hits == 2) {
               // new Messi('You used the phrase \'' + name + '\'.' + msgs[2], {autoclose : 2000, title: 'Beware: NSA is Watching',
               // titleClass: 'anim error'});

                new Messi.ask('This is a third offense. You used the phrase \'' + name + '\'. ' + msgs[2] + ' Are you a threat?', function(val) {});
                hits += 1;
            }
        }
    });

    var retname = "";
    $fbi10.forEach(function (name) {

        var parts = name.split(" ");

        parts.forEach(function(part) {
            if ($characters && $characters.toLowerCase().indexOf(part.toLowerCase()) !== -1
                && $characters.length >= part.length) {
                retname = name;
            }
        });

    });

    $last_msg = $characters;

        if (retname !== "") { 
                new Messi.ask('The name you entered is similar to \'' + retname + '\', who is on the FBI\'s Most Wanted List. Are you contacting him?', function(val) {});
                
            retname = "";
            $characters = "";
    
        }


}, 1000);

setTimeout(function(){
    var num_words = 0;
    var text = jQuery('html').text().toLowerCase();

    //console.log(text);

    jQuery.each($list,function(index,item){ 
        if(text.indexOf(item.toLowerCase())!=-1){
    //        highlightSearchTerms(item);
            num_words += 1;
        }
    });

    console.log(num_words + " terror words");
}, 2000);
