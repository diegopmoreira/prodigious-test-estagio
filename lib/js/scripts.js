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
function geo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      pos.lat = parseFloat(pos.lat).toFixed(5);
      pos.lng = parseFloat(pos.lng).toFixed(5);

      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.lat + ',' + pos.lng + '&key=AIzaSyB6sZHul67VCNdBooQmGdwb1rNRd2jXRqI', function (data) {
        city = data.results[0].address_components[3].long_name;
        state = data.results[0].address_components[5].long_name;
      });
    });
  }
}

var city, state;
geo();
//FIM API LOCALIZACAO


$(document).ready(function () {
  var j = 0; //variavel para contar os bullets
  var k = 1; //variavel para contar os text_slides



  /*Aqui seria utilizado canvas para lidar com as imagens no carousel
  entretanto foi preferivel manter o uso de background ao inves de recorte com canvas
  
  let canvas = document.getElementById('canvas');
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
    //repeticao que insere dinamicamente as bullets/dots para evitar ter que criar 28 tags no html
    if (i == 3 || i == 10 || i == 17 || i == 24) {
      $('.slider').append('<div class="bullet_square"><a href="#"><div class="bullet"></div></a></div>')
    } else {
      $('.slider').append('<div class="bullet_square"><div class="bullet"></div></div>')
    }
  }

  //estas 8 funcoes abaixo fazem o papel de estilizar e animar o caroulse e sliders
  $(".bullet_square:nth-child(4)").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "117px");
    j = 4;
    k = 2;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
    $('.text_slider li:nth-child(1) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(1)) a').css('color', '#575757');
  });
  $(".bullet_square:nth-child(11) ").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-11px");
    j = 11;
    k = 3;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
    $('.text_slider li:nth-child(2) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(2)) a').css('color', '#575757');
  });
  $(".bullet_square:nth-child(18) ").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-139px");
    j = 18;
    k = 4;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
    $('.text_slider li:nth-child(3) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(3)) a').css('color', '#575757');
  });
  $(".bullet_square:nth-child(25) ").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-267px");
    j = 25;
    k = 5;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
    $('.text_slider li:nth-child(4) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(4)) a').css('color', '#575757');
  });

  $(".text_slider li:nth-child(1)").click(function (e) {
    e.preventDefault();

    $('.parent_logo .logo_client').css("background-position-x", "117px");
    $('.text_slider li:nth-child(1) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(1)) a').css('color', '#575757');
    j = 4;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
  });
  $(".text_slider li:nth-child(2) ").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-11px");
    $('.text_slider li:nth-child(2) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(2)) a').css('color', '#575757');
    j = 11;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
  });
  $(".text_slider li:nth-child(3) ").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-139px");
    $('.text_slider li:nth-child(3) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(3)) a').css('color', '#575757');
    j = 18;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
  });
  $(".text_slider li:nth-child(4)").click(function (e) {
    e.preventDefault();
    $('.parent_logo .logo_client').css("background-position-x", "-267px");
    $('.text_slider li:nth-child(4) a').css('color', 'white');
    $('.text_slider li:not(:nth-child(4)) a').css('color', '#575757');
    j = 25;
    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
    $('.slider .bullet_square:not(:nth-child(' + j + ')) .bullet').css('background', '#575757');
  });





  //mostrar cidade e estado
  $('.gps_svg a').click(function () {
    $('#geo').empty();
    $('#geo').fadeIn();
    $('#geo').append('<span>' + city + ', ' + state + '</span>');
    setTimeout(function () {
      $('#geo').fadeOut();
      $('#geo').empty();
    }, 4000);
  });

  $('.ham_svg a').click(function () {
    $('.menu_clients').slideToggle();

  });

  //ao clicar no cliente na lista do menu hamburger abre a modal com suas respectivas informacoes
  $('.menu_clients li a').click(function () {
    $('.modal_clients li').hide();
    $('.menu_clients').slideToggle();
    $('.modal').fadeIn();
    $('body').css('overflow', 'hidden');
    var target = $(this).html();

    $('.modal [data-target="' + target + '"]').show();
  });

//ao clicar no logo no slider abre a modal com suas respectivas informacoes
  $('.parent_logo a').click(function () {
    $('.modal_clients li').hide();
    $('.modal').fadeIn();
    $('body').css('overflow', 'hidden');
    var target;
    if ($('.logo_client').css('background-position-x') == "117px") {
      target = "Bradesco";
    } else if ($('.logo_client').css('background-position-x') == "-11px") {
      target = "Comitê Olímpico Brasileiro";
    } else if ($('.logo_client').css('background-position-x') == "-139px") {
      target = "Habib's";
    } else {
      target = "Lexus";
    }
    $('.modal [data-target="' + target + '"]').fadeIn();

  });
//adiciona o scroll de volta a pagina ao fechar a modal
  $('.modal_clients a').click(function () {
    $('.modal').fadeOut();
    $('body').css('overflow', 'visible');
  });


  //este intervalo trabalha como contador no slider/carousel e estilizando adequadamente
  setInterval(function () {
    j++;

    $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');

    if (j == 4 || j == 11 || j == 18 || j == 25) {
      $('.slider .bullet_square:lt(' + j + ') .bullet').css('background', '#575757');
      $('.slider .bullet_square:nth-child(' + j + ') .bullet').css('background', 'white');
      $('.text_slider li:nth-child(' + k + ') a').css('color', 'white');
      $('.text_slider li:not(:nth-child(' + k + ')) a').css('color', '#575757');
      k++;

      if (j == 4) {
        $('.logo_client').css('background-position-x', '117px');
      } else if (j == 11) {
        $('.logo_client').css('background-position-x', '-11px');

      } else if (j == 18) {
        $('.logo_client').css('background-position-x', '-139px');
      } else if (j == 25) {
        $('.logo_client').css('background-position-x', '-267px');
      }
    }

    if (j == 29) {

      $('.text_slider li:not(:nth-child(' + k + ')) a').css('color', '#575757');
      k = 1;

      $('.slider .bullet_square .bullet').css('background', '#575757');
      j = 0;
    }
  }, 500);

});


