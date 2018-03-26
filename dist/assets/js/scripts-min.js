"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("player",{videoId:"M7lc1UVf-VE",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(l){}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var city,state,done=!1;function onPlayerStateChange(l){l.data!=YT.PlayerState.PLAYING||done||(setTimeout(stopVideo,6e3),done=!0)}function stopVideo(){player.stopVideo()}function geo(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(l){var t={lat:l.coords.latitude,lng:l.coords.longitude};t.lat=parseFloat(t.lat).toFixed(5),t.lng=parseFloat(t.lng).toFixed(5),$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+t.lat+","+t.lng+"&key=AIzaSyB6sZHul67VCNdBooQmGdwb1rNRd2jXRqI",function(l){city=l.results[0].address_components[3].long_name,state=l.results[0].address_components[5].long_name})})}geo(),$(document).ready(function(){for(var l=0,t=1,e=0;e<28;e++)3==e||10==e||17==e||24==e?$(".slider").append('<div class="bullet_square"><a href="#"><div class="bullet"></div></a></div>'):$(".slider").append('<div class="bullet_square"><div class="bullet"></div></div>');$(".bullet_square:nth-child(4)").click(function(){$(".parent_logo .logo_client").css("background-position-x","117px"),l=4,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".bullet_square:nth-child(11) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-11px"),l=11,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".bullet_square:nth-child(18) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-139px"),l=18,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".bullet_square:nth-child(25) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-267px"),l=25,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".text_slider li:nth-child(1)").click(function(){$(".parent_logo .logo_client").css("background-position-x","117px"),$(".text_slider li:nth-child(1) a").css("color","white"),$(".text_slider li:not(:nth-child(1)) a").css("color","#575757"),l=4,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".text_slider li:nth-child(2) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-11px"),$(".text_slider li:nth-child(2) a").css("color","white"),$(".text_slider li:not(:nth-child(2)) a").css("color","#575757"),l=11,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".text_slider li:nth-child(3) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-139px"),$(".text_slider li:nth-child(3) a").css("color","white"),$(".text_slider li:not(:nth-child(3)) a").css("color","#575757"),l=18,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".text_slider li:nth-child(4)").click(function(){$(".parent_logo .logo_client").css("background-position-x","-267px"),$(".text_slider li:nth-child(4) a").css("color","white"),$(".text_slider li:not(:nth-child(4)) a").css("color","#575757"),l=25,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".slider .bullet_square:not(:nth-child("+l+")) .bullet").css("background","#575757")}),$(".gps_svg a").click(function(){$("#geo").empty(),$("#geo").fadeIn(),$("#geo").append("<span>"+city+", "+state+"</span>"),setTimeout(function(){$("#geo").fadeOut(),$("#geo").empty()},4e3)}),$(".ham_svg a").click(function(){$(".menu_clients").slideToggle()}),$(".menu_clients li a").click(function(){$(".modal_clients li").hide(),$(".menu_clients").slideToggle(),$(".modal").fadeIn(),$("body").css("overflow","hidden");var l=$(this).html();$('.modal [data-target="'+l+'"]').show()}),$(".parent_logo a").click(function(){var l;$(".modal_clients li").hide(),$(".modal").fadeIn(),$("body").css("overflow","hidden"),l="117px"==$(".logo_client").css("background-position-x")?"Bradesco":"-11px"==$(".logo_client").css("background-position-x")?"Comitê Olímpico Brasileiro":"-139px"==$(".logo_client").css("background-position-x")?"Habib's":"Lexus",$('.modal [data-target="'+l+'"]').fadeIn()}),$(".modal_clients a").click(function(){$(".modal").fadeOut(),$("body").css("overflow","visible")}),setInterval(function(){l++,$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),4!=l&&11!=l&&18!=l&&25!=l||($(".slider .bullet_square:lt("+l+") .bullet").css("background","#575757"),$(".slider .bullet_square:nth-child("+l+") .bullet").css("background","white"),$(".text_slider li:nth-child("+t+") a").css("color","white"),$(".text_slider li:not(:nth-child("+t+")) a").css("color","#575757"),t++,4==l?$(".logo_client").css("background-position-x","117px"):11==l?$(".logo_client").css("background-position-x","-11px"):18==l?$(".logo_client").css("background-position-x","-139px"):25==l&&$(".logo_client").css("background-position-x","-267px")),29==l&&($(".text_slider li:not(:nth-child("+t+")) a").css("color","#575757"),t=1,$(".slider .bullet_square .bullet").css("background","#575757"),l=0)},500)});