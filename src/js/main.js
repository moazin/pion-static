import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// var $ = require('jquery');
// require('popper.js');
// require('bootstrap');

var TEAMS_DATA = {
    'website': {
        'mentors': ['ali nauroze'],
        'coordinators': ['moazin khatri'],
        'heads': ['abdul rehman', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'design': {
        'mentors': ['ali nauroze'],
        'coordinators': ['moazin khatri'],
        'heads': ['abdul rehman', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'management': {
        'mentors': ['ali nauroze'],
        'coordinators': ['moazin khatri'],
        'heads': ['abdul rehman', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    }
};

var currentPage = '';
var images = ['images/mic-01.jpg', 'images/mic-02.jpg', 'images/mic-03.jpg'];
var imageIndex = 0;
var videos = ['videos/video-01.mp4', 'videos/video-02.mp4'];
var videoIndex = 0;
var TAG = '[mobile.js] : ';

$(function() {
    console.log(TAG + 'document: starts');

    let htmlPath = window.location.href;
    let startIndex = htmlPath.search('dist/(.)+.html');
    let endIndex = htmlPath.search('.html');
    currentPage = htmlPath.substring(startIndex + 5, endIndex);
    let navItems = $('#nav-menu a');
    $('.active').removeClass('active');
    for (let i of navItems) {
        if ($(i).attr('fileName') == currentPage) {
            $(i).addClass('active');
        }
    }

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

    if(currentPage == 'teams') {
        createTeamsPage();
        createTeamsSlider();
    }
    console.log(TAG + 'document: ends');
});

function createTeamsPage() {
    console.log(TAG + 'createTeamsPage: starts');
    let html = '';
    for(let team_name in TEAMS_DATA) {
        console.log('createTeamsPage: ' + team_name);
        let mentors = TEAMS_DATA[team_name]['mentors'];
        let coordinators = TEAMS_DATA[team_name]['coordinators'];
        let heads = TEAMS_DATA[team_name]['heads'];
        let members = TEAMS_DATA[team_name]['members'];
        html += '<section id="' + team_name + '" class="team-container">\n';
        html += '    <h1>Team ' + team_name + '</h1>\n';
        html += '    <div class="members-container">\n';

        html += '        <div class="mentors">\n';
        for(let name of mentors) {
            html += '            <div class="team-member">\n';
            html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
            html += '                <p class="member-name">' + name + '</p>\n';
            html += '                <p class="member-post">Mentor</p>\n';
            html += '            </div>\n';
        }
        html += '        </div>\n';

        html += '        <div class="coordinators">\n';
        for(let name of coordinators) {
            html += '            <div class="team-member">\n';
            html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
            html += '                <p class="member-name">' + name + '</p>\n';
            html += '                <p class="member-post">Coordinator</p>\n';
            html += '            </div>\n';
        }
        html += '        </div>\n';

        html += '        <div class="heads">\n';
        for(let name of heads) {
            html += '            <div class="team-member">\n';
            html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
            html += '                <p class="member-name">' + name + '</p>\n';
            html += '                <p class="member-post">Head</p>\n';
            html += '            </div>\n';
        }
        html += '        </div>\n';

        html += '        <div class="members">\n';
        for(let name of members) {
            html += '            <div class="team-member">\n';
            html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
            html += '                <p class="member-name">' + name + '</p>\n';
            html += '                <p class="member-post">Member</p>\n';
            html += '            </div>\n';
        }
        html += '        </div>\n';

        html += '    </div>\n';
        html += '</section>\n';
    }
    $('#teams').append(html);
    console.log(TAG + 'createTeamsPage: ends');
}

function createTeamsSlider() {
    console.log('createTeamsSlider: starts');
    let sections = $('main section');
    console.log(sections.length);

    let html = '<ul>\n';
    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
        html += '    <li>\n';
        html += '        <span id="tooltip">' + $(sections[i]).attr('id') + '</span>\n';
        html += '        <a href="#' + $(sections[i]).attr('id') + '">•</a>\n';
        html += '    </li>\n';
    }
    html += '</ul>';
    console.log(html);
    $('#slider').html(html);

    $('#slider li').hover(function() {
        $($(this).children()[0]).toggle();
    });

    $(window).mousemove(function(e) {
        let mouseX = e.clientX;
        let windowWidth = window.innerWidth;
        if (mouseX >= 0.9 * windowWidth) {
            $('#slider').css('opacity', 1);
        } else {
            $('#slider').css('opacity', 0.5);
        }
    });
    console.log('createTeamsSlider: ends');
}