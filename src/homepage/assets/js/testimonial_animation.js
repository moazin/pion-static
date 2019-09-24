$(document).ready(function(){
	let currentFrame = 0;
	
	const image_ = $("#testimonial_image");
	const testimonial = $("#testimonial_content");
	
	function zoomIn(){
		image_.animate({"width" : "80px", "height" : "80px", "margin-top" : "50px", "opacity" : "0.5"}, 1000);
		testimonial.animate({"opacity" : "0"}, 500);
	}
	
	function zoomOut(){
		image_.animate({"width" : "180px", "height" : "180px", "margin-top" : "0px", "opacity" : "1"}, 1000);
	}
	
	function showContent(){
		testimonial.animate({"opacity" : "1"}, 200);
	}
	
	function hideContent(){
		testimonial.animate({"opacity" : "1"}, 200);
	}
	
	function changeTestimonial(imageURL, content){
		image_.css({"background" : "url(homepage/assets/images/testimonials/"+imageURL+")", "background-size" : "cover"});
		testimonial.text(content);
	}
	
	function stepAnimation(){
		changeTestimonial(testimonials[currentFrame].name + ".png", testimonials[currentFrame].content);
		if (currentFrame == testimonials.length - 1)
			currentFrame = 0;
		if (currentFrame != testimonials.length - 2)
			currentFrame++;
		
		zoomOut();
		setTimeout(showContent, 1100);
		setTimeout(hideContent, 3300);
		setTimeout(zoomIn, 3600);
		setTimeout(stepAnimation, 5500);
	}
	
	stepAnimation();
	
});
