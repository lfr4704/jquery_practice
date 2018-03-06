$( document ).ready(function() { //this is how you call jquery
	//the following is code to change color by id
	//$("#header").click( function() {
	//	$("h1").css("color", "red");
	//});

//this is how to change color of id header on click of header
$("#header").click(function() {

var currentColor = $("#header").css("color");

if (currentColor == "rgb(0, 0, 0)") {

	$("#header").css("color", "gold");
} else {
	$("#header").css('color', "rgb(0, 0, 0)");
}

});

//this code changes the color of the box on click of button
	var box = $("#my-box");
	var colorString = "rgb(";
	


	$("#buttonColor").click( function(){
		//the setInterval fucntion changes the color every second with the change of a button
		setInterval(function() {
		
		colorString = "rgb(";
		colorString += giveMeARandomNumber() + ", " + giveMeARandomNumber() + ", " + giveMeARandomNumber() + ")"; // this means colorString = colorString + giveMeARandonNumber();
		console.log(colorString);
		box.css("background-color", colorString);
		},1000);


	});

	//this code below shows and hides box with click of button
	$("#show").click(function(){

		box.show(1000);
		console.log(giveMeARandomNumber());
	});
		
	$("#hide").click(function(){

		box.hide(1000);
	});
		

}); //this is how you end jquery

	

function giveMeARandomNumber() {
	var number =Math.random() * 255;  // we mulitple times 255 because we want the number to be up to 255. 
	var number = Math.round(number); //this is to get rid of decimals becasue rgb  to be used later does not accept decimals

	return number;

}





