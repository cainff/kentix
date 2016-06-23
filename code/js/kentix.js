$(document).ready(function(){
dom_init();
});

function predom_init(){
    // here we do before the load of the page
};

function dom_init(){
    // here we do after the dom ready
    
};

predom_init();



        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay:3500,
        freeMode: true,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetweenSlides: 5
            },
            freeMode: false,
        }
    });



//Youtube playlist//

        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;

        function onYouTubePlayerAPIReady() 
{
        player = new YT.Player('player', 
        {
          height: '390',
          width: '640',
          playerVars: 
          {
            listType:'playlist',
            list: 'PLWXKslPRlXNQoBnmiQofE83oJ0MdIPNfE'
          }
        });
}

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }
        }

        function stopVideo() {
            player.stopVideo();
        }

//Faire apparaitre et disparaitre le lecteur soundcloud

/**$(document).ready(function () {
    $("#album1").click(function () {
        $("#lpdm").hide();
    });
    $("#album1").click(function () {
        $("#lpdm").show();
    });
});**/


/**$(document).ready(function () {
    $("#album1").click(function () {
        $("#bloc4-2").hide();
    });
    $("#album1").click(function () {
        $("#bloc4-2").show();
    });
    
});

$(document).ready(function () {
    $("#hide1").click(function () {
        $("#bloc4-2").show();
    });
    $("#hide1").click(function () {
        $("#bloc4-2").hide();
    });
    
});
**/



function soundcl(){
    if ($('#bloc4-2').hasClass('hide')){
        $('#bloc4-2').removeClass('hide');
    } else {    
        $('#bloc4-2').addClass('hide');
    }
};


var music=document.getElementById('album2');
    music.addEventListener('click',soundcl); 


function soundcl2(){
    if ($('#bloc4-3').hasClass('hide')){
        $('#bloc4-3').removeClass('hide');
    } else {    
        $('#bloc4-3').addClass('hide');
    }
};


var music=document.getElementById('album1');
    music.addEventListener('click',soundcl2); 
