$( document ).ready(function() { //this is how you call jquery
	//the following is code to change color by id
	//$("#header").click( function() {
	//	$("h1").css("color", "red");
	//});

/*	this is how to change color of id header on click of header
$("#header").click(function() {

var currentColor = $("#header").css("color");

if (currentColor == "rgb(0, 0, 0)") {

	$("#header").css("color", "gold");
} else {
	$("#header").css('color', "rgb(0, 0, 0)");
}

});
*/

	var box = $("#my-box");

	$("#show").click(function(){

		box.show(1000);
	});
		

	$("#hide").click(function(){

		box.hide(1000);
	});
		

}); //this is how you end jquery

	







