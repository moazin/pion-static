let elems = new Object();
let screen = new Object();
let position = new Object();




$(document).ready(function(){
	
	setTimeout(function(){
		$("#lb").hide();
		$("#lb").css("z-index", "-1");
		$(".section").css("display", "block");
		$("#topbar").css("display", "block");
	}, 1000);
	function dimensions(){
	elems.body = document.getElementsByTagName("body")[0];
	elems.section1 = document.getElementById("section1");
	screen.width = elems.section1.clientWidth;
	screen.height = elems.section1.clientHeight;
	
	$("#section3_main").css("margin-top", (screen.height - 400)/2);
	$("#section3_slide").css("margin-top", (screen.height - 450)/2);
	
	$("#section4").css("margin-top", screen.height);
	
	}
	
	dimensions();
	
	window.onresize = () => {
		dimensions();
	}
	
	setTimeout(dimensions, 5000);
	
	function marginPeople(){
		let person = document.getElementsByClassName("section3_slide_element");
		for (i = 0; i < person.length; i++){
			person[i].style.marginTop = Math.random() * 60 + 5;
			person[i].style.background = "url(assets/images/testimonials/" + testimonials[Math.floor(Math.random() * testimonials.length)].name + ".png)";
			person[i].style.backgroundSize = "cover";
			console.log("m");
		}
	}
	marginPeople();
	
	$("#button-day-1").click(function(){
		$(".day1").css({"display" : "inline-block"})
		$(".day2").css({"display" : "none"})
		$(".day3").css({"display" : "none"})
	});
	$("#button-day-2").click(function(){
		$(".day1").css({"display" : "none"})
		$(".day2").css({"display" : "inline-block"})
		$(".day3").css({"display" : "none"})
	});
	$("#button-day-3").click(function(){
		$(".day1").css({"display" : "none"})
		$(".day2").css({"display" : "none"})
		$(".day3").css({"display" : "inline-block"})
	});
});



