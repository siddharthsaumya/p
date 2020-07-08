
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
$(".hamburger").click(function(){
  $("nav").toggleClass("bg-close");
  $(".logo").toggleClass("invisible");
  $("#upper").toggleClass("upper-cross bg-close bg-open");
    $("#lower").toggleClass("lower-cross bg-close bg-open");
});
$(".hamburger").ready(function() {
           $(".hamburger").hover(function() {
               $(".bg-close").css("background", "#1f4954");
           }, function() {
               $(".bg-close").css("background", "#a5acbc");
           });
           $(".hamburger").hover(function() {
               $(".bg-open").css("background", "white");
           });
       });
       $(".hamburger").click(function(){
   $(".bg-open").css("background", "white");
   $(".bg-close").css("background", "#a5acbc");
});
$('img').bind('contextmenu', function(e) {
return false;
});
var chk = document.getElementById('checktoggle');
chk.addEventListener('change', darkModeChange);
  $('#checktoggle').val(this.checked);
function darkModeChange() {
    $('#checktoggle').val(this.checked);
  if (chk.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('invert-total');
  }
    $('#checktoggle').val(this.checked);
};
$(document).ready(function() {
    $('#checktoggle').val(this.checked);
    $('#checktoggle').click(function() {
      $("#resumetext").toggleClass("black-text");
        $("#resumetext").toggleClass("white-text");
          $(".border-grey").hover(function() {
              $("#resumelogo").toggleClass("invert-total");
          });
        $("#resumelogo").toggleClass("invert-total");
        $('#checktoggle').val(this.checked);
    });
});

$('#popup1').popup();
