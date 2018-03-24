"use strict"
//API YOUTUBE
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }

  });
}

function onPlayerReady(event) {
  //event.target.playVideo();
}

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
//FIM API YOUTUBE

//API GEOLOCALIZACAO


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({ map: map });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
//FIM API LOCALIZACAO
$(document).ready(function () {
  /*let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let image = document.getElementById('sprites');
  var x =0;

  var clients = [{
    name: "Bradesco",
    posX_start: "0",
    posY_start: "0",
    width: "135",
    height: "104"
  },
  {
    name: "Comitê Olímpico Brasileiro",
    posX_start: "245",
    posY_start: "0",
    width: "111",
    height: "111"
  },
  {
    name: "Habib's",
    posX_start: "455",
    posY_start: "0",
    width: "165",
    height: "46"
  },
  {
  name: "Lexus",
  posX_start: "702",
  posY_start: "0",
  width: "140",
  height: "97"
  }];
  $('#canvas').css({"width": clients[x].width*4+"px", "height": clients[x].heigth*4+"px"})
ctx.drawImage(image, clients[x].posX_start, clients[x].posY_start, clients[x].width, clients[x].height, 0, 0, clients[x].width, clients[x].height);
*/
  for (var i = 0; i < 28; i++) {
    if (i == 3 || i == 10 || i == 17 || i == 24) {
      $('.slider').append('<div class="bullet_square"><a href="#"><div class="bullet"></div></a></div>')
    } else {
      $('.slider').append('<div class="bullet_square"><div class="bullet"></div></div>')
    }
  }

  $(".bullet_square:nth-child(4)").click(function () {

    $('.parent_logo .logo_client').css("background-position-x", "117px");
  });
  $(".bullet_square:nth-child(11) ").click(function () {

    $('.parent_logo .logo_client').css("background-position-x", "-11px");
  });
  $(".bullet_square:nth-child(18) ").click(function () {
    $('.parent_logo .logo_client').css("background-position-x", "-139px");
  });
  $(".bullet_square:nth-child(25) ").click(function () {
    $('.parent_logo .logo_client').css("background-position-x", "-267px");
  });

  $(".text_slider li:nth-child(1)").click(function () {
    console.log("test");
    $('.parent_logo .logo_client').css("background-position-x", "117px");
  });
  $(".text_slider li:nth-child(2) ").click(function () {
    $('.parent_logo .logo_client').css("background-position-x", "-11px");
  });
  $(".text_slider li:nth-child(3) ").click(function () {
    $('.parent_logo .logo_client').css("background-position-x", "-139px");
  });
  $(".text_slider li:nth-child(4)").click(function () {
    $('.parent_logo .logo_client').css("background-position-x", "-267px");
  });

  $('.gps_svg a').click(function(){
    $('#map').css("display","block");
    $('#map').css("width","100px");
    $('#map').css("height","100px");
  });
});


