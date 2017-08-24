$(document).ready(function(){

var usernum = 0;
var wins = false;
var losses = false;
var counter = 0;

// Generate random number between 1-12 to each gem
var randoNumGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// Generate random number between 19-120
var randoNumWiz = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Assign random number to Wizard's number
$("#wizardnum").html(randoNumWiz);

// Set user score to 0
$("#usernum").text(counter);

// Assign random number to gems
function gemNumbers() {
	$("#diamond").val(randoNumGem1);
	$("#ruby").val(randoNumGem2);
	$("#emerald").val(randoNumGem3);
	$("#topaz").val(randoNumGem4);
}

gemNumbers();

});



	// Create "click" function
	$(document).on("click", "gem", function() {
		$("#usernum").text(parseInt($("#usernum").text()) + parseInt($(this).data("value")));

		window.onload=function() {


		  // $("#diamond").onclick=function() { 
		  //   $("usernum").value = add($("usernum"),"value");
		  // }  
		  // $("#ruby").onclick=function() { 
		  //   $("usernum").value = add($("usernum"),"value");
		  // } 
		  // $("#emerald").onclick=function() { 
		  //   $("usernum").value = add($("usernum"),"value");
		  // } 
		  // $("#topaz").onclick = function() {    
		  //   $("usernum").value = add($("usernum"),"value");
		  // } 
		}


					// Write gem numbers to User Number
					// var $ = function (id) { return document.getElementById(id); }
					// var add = function(fld,val) {
				 	// 	 return (parseFloat(fld.value)+val);


		// $(".gem").on("click", function() {

	 //      var gemTotal = ($(this).val("data-gemtotal"));
	      
	 //      gemTotal = parseInt(gemTotal);
	      
	 //      counter += gemTotal;
	 //      $("#usernum").text(counter);


		// 			// if ($(this).hasClass("gem")) {
		// 			// 		usernum += $(this).val("value");

		// 	if (usernum === wizardnum) {
	 	//        	$("#total-score").text(counter);
		//         wins++;
		//         alert("You are victorious!");
		//         $("#wins").html(wins);
		//         reset();
  		//     		}
		// });

					// Create logic for player winning
						//If usernum === wizardnum then "You win!" and wins++
						

					// Create logic for player losing
						//If usernum >== wizardnum then "You lose!" and losses++


					// Create logic for resetting game/score/gem numbers
						//Set new randoNum for each gem
	});
