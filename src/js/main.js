import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// var $ = require('jquery');
// require('popper.js');
// require('bootstrap');

var images = ['images/mic-01.jpg', 'images/mic-02.jpg', 'images/mic-03.jpg'];
var imageIndex = 0;

var videos = ['videos/video-01.mp4', 'videos/video-02.mp4'];
var videoIndex = 0;
var TAG = '[mobile.js] : '

$(function() {
    console.log(TAG + 'document: starts');
    console.log(sessionStorage.getItem('indexActive'));

    if(sessionStorage.getItem('indexActive')) {
        var indexActive = sessionStorage.getItem('indexActive');
        var activeChild = $('#nav-menu').children()[indexActive];
    } else {
        var activeChild = $('#nav-menu').children()[0];
    }
    $('.active').removeClass('active');
    $(activeChild).addClass('active');

    $('#nav-menu-control').click(function() {
        console.log(TAG + 'nav-menu-control click: starts');
        $('#nav-menu').slideToggle();
        $('#nav-menu').toggleClass('nav-menu-toggle');
        console.log(TAG + 'nav-menu-control click: ends');
    });

    $('#nav-menu a').click(function() {
        console.log(TAG + 'nav-menu <a> clicked');
        console.log(TAG + $(this).attr('index'));
        sessionStorage.setItem('indexActive', $(this).attr('index'));
    });

    $('#section-image-slider .slide-left-button').click(function() {
        imageIndex = (imageIndex - 1) % images.length;
        imageIndex = (imageIndex < 0) ? imageIndex + images.length : imageIndex;
        $('#section-image-slider img').attr('src', images[imageIndex]);
    });

    $('#section-image-slider .slide-right-button').click(function() {
        imageIndex = (imageIndex + 1) % images.length;
        $('#section-image-slider img').attr('src', images[imageIndex]);
    });

    $('#section-video-slider .slide-left-button').click(function() {
        videoIndex = (videoIndex - 1) % videos.length;
        videoIndex = (videoIndex < 0) ? videoIndex + videos.length : videoIndex;
        $('#section-video-slider video source').attr('src', videos[videoIndex]);
        $('#section-video-slider video')[0].load();
    });

    $('#section-video-slider .slide-right-button').click(function() {
        videoIndex = (videoIndex + 1) % videos.length;
        $('#section-video-slider video source').attr('src', videos[videoIndex]);
        $('#section-video-slider video')[0].load();
    });

    console.log(TAG + 'document: ends');
});
