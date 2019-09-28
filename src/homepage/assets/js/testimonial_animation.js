$(document).ready(function() {
    console.log('[testimonial_animation][starts]');
    let currentFrame = 0;

    const image_ = $("#testimonial_image");
    const testimonial = $("#testimonial_content");

    function stepAnimation() {
        console.log('[testimonial_animation][stepAnimation]');
        image_.animate({ "width": "80px", "height": "80px", "margin-top": "50px", "opacity": "0.5" }, 1000);
        testimonial.animate({ "opacity": "0" }, 1000, function() {
            image_.css({ "background": "url(homepage/assets/images/testimonials/" + testimonials[currentFrame].name + ")", "background-size": "cover" });
            testimonial.text(testimonials[currentFrame].content);
            if (currentFrame == testimonials.length - 1) {
                currentFrame = 0;
            } else {
                currentFrame++;
            }
            image_.animate({ "width": "180px", "height": "180px", "margin-top": "0px", "opacity": "1" }, 1000);
            testimonial.animate({ "opacity": "1" }, 1000);
        });
    }

    stepAnimation();
    setInterval(stepAnimation, 5000);
    console.log('[testimonial_animation][ends]');
});