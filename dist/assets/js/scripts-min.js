"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("player",{videoId:"M7lc1UVf-VE",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(t){}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var city,state,done=!1;function onPlayerStateChange(t){t.data!=YT.PlayerState.PLAYING||done||(setTimeout(stopVideo,6e3),done=!0)}function stopVideo(){player.stopVideo()}function geo(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var e={lat:t.coords.latitude,lng:t.coords.longitude};e.lat=parseFloat(e.lat).toFixed(5),e.lng=parseFloat(e.lng).toFixed(5),$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.lat+","+e.lng+"&key=AIzaSyB6sZHul67VCNdBooQmGdwb1rNRd2jXRqI",function(t){city=t.results[0].address_components[3].long_name,state=t.results[0].address_components[5].long_name})})}geo(),$(document).ready(function(){for(var t=0;t<28;t++)3==t||10==t||17==t||24==t?$(".slider").append('<div class="bullet_square"><a href="#"><div class="bullet"></div></a></div>'):$(".slider").append('<div class="bullet_square"><div class="bullet"></div></div>');$(".bullet_square:nth-child(4)").click(function(){$(".parent_logo .logo_client").css("background-position-x","117px")}),$(".bullet_square:nth-child(11) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-11px")}),$(".bullet_square:nth-child(18) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-139px")}),$(".bullet_square:nth-child(25) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-267px")}),$(".text_slider li:nth-child(1)").click(function(){$(".parent_logo .logo_client").css("background-position-x","117px")}),$(".text_slider li:nth-child(2) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-11px")}),$(".text_slider li:nth-child(3) ").click(function(){$(".parent_logo .logo_client").css("background-position-x","-139px")}),$(".text_slider li:nth-child(4)").click(function(){$(".parent_logo .logo_client").css("background-position-x","-267px")}),$(".gps_svg a").click(function(){$("#geo").fadeIn(),$("#geo").append("<span>"+city+", "+state+"</span>"),setTimeout(function(){$("#geo").fadeOut(),$("#geo").empty()},4e3)}),$(".ham_svg a").click(function(){$(".menu_clients").slideToggle()}),$(".menu_clients li a").click(function(){$(".menu_clients").slideToggle(),$(".modal").fadeIn();var t=$(this).html();$(".modal_clients li").attr("data-target")===t&&($(".modal_clients li").fadeIn(),console.log(t))})});