$(document).ready(function() {
    console.log('[testimonial_animation][starts]');
    let currentFrame = 0;

    const image = $("#testimonial_image");
    const name = $("#testimonial_content");
    const content = $("#section3p");
    const title = $("#section3_main .title");

    function stepAnimation() {
        console.log('[testimonial_animation][stepAnimation]');
        console.log('currentFrame -> ' + currentFrame);
        image.animate({ "width": "80px", "height": "80px", "margin-top": "50px", "opacity": "0.5" }, 1000);
        name.animate({ "opacity": "0" }, 1000, function() {
            image.css({ "background": "url(images/testimonials/" + testimonials[currentFrame].image + ")", "background-size": "cover" });
            name.text(testimonials[currentFrame].name);
            content.text(testimonials[currentFrame].content);
            title.text(testimonials[currentFrame].title);

            if (currentFrame == testimonials.length - 1) {
                currentFrame = 0;
            } else {
                currentFrame++;
            }
            image.animate({ "width": "180px", "height": "180px", "margin-top": "0px", "opacity": "1" }, 1000);
            name.animate({ "opacity": "1" }, 1000);
            content.animate({ "opacity": "1" }, 1000);
            title.animate({ "opacity": "1" }, 1000);
        });
    }

    stepAnimation();
    setInterval(stepAnimation, 5000);
    console.log('[testimonial_animation][ends]');
});