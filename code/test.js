$(document).ready(function () {
    dom_init();
});

function predom_init() {
    // here we do before the load of the page
};

function dom_init() {
    // here we do after the dom ready

};

predom_init();



/**Formulaire de contact**/

(function (d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = "http://fr.foxyform.com/js.php?id=171312&sec_hash=50c66849eb5&width=350px";
    s.parentNode.insertBefore(g, s);
}(document, "script"));

/**Faire apparaitre les blocs**/

$(document).ready(function () {
    $("#button2").click(function () {
        $("#div1").hide();
    });
    $("#button3").click(function () {
        $("#div1").show();
    });
});

$(document).ready(function () {
    $("#button4").click(function () {
        $("#vide").hide();
    });
    $("#button4").click(function () {
        $("#vide").show();
    });


});


$(document).ready(function () {
    $("button5").click(function () {
        $("ouloulou").toggle("fold", 1000);
    });
});


// play // 


var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }


TweenMax.set('svg', {
  visibility: 'visible'
})

var tl = new TimelineMax({repeat:0, paused:true});
tl.to('#playLeft', 1, {
  drawSVG:'16%" 84%',
  x:5,
  //strokeWidth:40,
  //ease:Elastic.easeOut.config(0.5, 0.5)
  ease:Expo.easeInOut
})
.to('#playRight', 1, {
  morphSVG:{shape:'#pauseRight'},
  x:5,
  //strokeWidth:40,
  //ease:Elastic.easeOut.config(0.5, 0.5)
  ease:Expo.easeInOut
},'-=1')

/* .to('#whole', 1, {
  rotation:'+=180',
  transformOrigin:'50% 50%',
  //ease:Back.easeInOut.config(0.3)
  ease:Expo.easeInOut
},'-=1') */

tl.timeScale(1.62)
//ScrubGSAPTimeline(tl)
select('#outline').onclick = function(e){
  
  if(tl.progress() > 0){
    tl.reverse();
  } else{
    tl.play()
  }
}
