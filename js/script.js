$( document ).ready(function() { //this is how you call jquery
	//the following is code to change color by id
	//$("#header").click( function() {
	//	$("h1").css("color", "red");
	//})

var currentColor = $("#header").css("color");

if (currentColor == "rgb(0, 0, 0)") {

	$("#header").css("color", "gold");
} else {
	$("#header").css('color', "rgb(0, 0, 0");
}



}); //this is how you end jquery

	







