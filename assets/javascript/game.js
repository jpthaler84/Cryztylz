$(document).ready(function(){


var winScore = false;
var loseScore = false;

// Generate random number between 1-12 to each gem
var randoNumGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var randoNumGem4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// Generate random number between 19-120
var randoNumWiz = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Assign random number to Wizard's number
$("#wizardnum").html(randoNumWiz);

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
$(document).on("click", "button", function() {

	// Write gem numbers to User Number
	// var $ = function (id) { return document.getElementById(id); }
	// var add = function(fld,val) {
 // 	 return (parseFloat(fld.value)+val);
if ($(this).hasClass("gem")) {
		usernum += $(this).val("value");

}


	// window.onload=function() {
	  // $("#diamond").onclick=function() { 
	  //   $("usernum").value = add($("usernum"), ($("#diamond").val(randoNumGem1)));
	  //   	console.log("#usernum").val()
	  // }  
	  // $("#ruby").onclick=function() { 
	  //   $("usernum").value = add($("usernum"),.1);
	  // } 
	  // $("#emerald").onclick=function() { 
	  //   $("usernum").value = add($("usernum"),.05);
	  // } 
	  // $("#topaz").onclick = function() {    
	  //   $("usernum").value = "0.00";
	  // } 
	// }

	// Create logic for player winning


	// Create logic for player losing


	// Create logic for resetting game/score/gem numbers

	});
