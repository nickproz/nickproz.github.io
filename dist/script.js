$(document).ready(function(){$("body").css("visibility","visible").hide().fadeIn("fast");var n=function(){return window.innerHeight<window.innerWidth};window.addEventListener("orientationchange",function(){n()},!1)}),$(document).ready(function(){$(".experience-tile").on("click",function(){var n="#"+$(this).attr("id").replace("-tile","");$(n).modal("show")})}),$(document).ready(function(){var n=$(".nav-link-container"),e="nav-active",i=".fade-in-block",a=["#home","#about","#experience","#contact"],t=function(){var n=window.location.hash;""!==n&&a.indexOf(n)!==-1||(window.location.hash="home")},o=function(n){var e;e=n?a[n-1]:window.location.hash,c(e),r(e)},c=function(i){if(a.indexOf(i)>=0){n.removeClass(e);var t="a[href='"+i+"']";$(t).parent().addClass(e)}},r=function(n){var e=$(n.replace("#",".")),a=e.find(i);a.length>0&&"0"===$(a[0]).css("opacity")&&a.each(function(n){$(this).delay(300*n).animate({opacity:"1"},1e3)})};!function(){t(),o()}(),$("#fullpage").fullpage({anchors:["home","about","experience","contact"],menu:"#menu",fixedElements:"",verticalCentered:!1,autoScrolling:!1,onLeave:function(n,e){o(e)}})});