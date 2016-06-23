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


// Youtube // 