import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// var $ = require('jquery');
// require('popper.js');
// require('bootstrap');

var TEAMS_DATA = {
    'website': {
        'coordinators': ['ali nauroze', 'moazin khatri'],
        'heads': ['abdul rehman', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'management': {
        'coordinators': ['muneeb ur rehman'],
        'heads': ['muneeb ur rehman', 'dawood mazhar', 'khan salik najeeb', 'daud shafqat'],
        'members': ['aamir abbas', 'aamna khan', 'abdul hannan', 'abdul moeez', 'abdul rafay', 'abdul samad', 'ahmad dar', 'ahmad hassan', 'ahmad hussain', 'ahmad kamal baig', 'aleena ajaz', 'ali amin', 'ali hassan', 'aneela riaz', 'aqsa mushtaq', 'asif mahmood', 'ayatullah', 'ayesha salar', 'bibi ayisha', 'bilal ahmad', 'emaan zahra', 'faiz ahmed', 'fareed hussain', 'fasih shaukat', 'hajrah rameen', 'hammad ali', 'hassan abbas', 'hassan askary', 'huzaifa nadeem', 'inaam ullah', 'iqra ayesha', 'kamla bibi', 'kashif munir', 'khan salik najeeb', 'khaz khezar ahmed', 'm.haider khan', 'm.mouaaz ranjha', 'maham ibrar', 'mehwish israr', 'minahil zafar ', 'mir hamza', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullah ansari', 'muhammad ahmad', 'muhammad ahmad bashir', 'muhammad ali', 'muhammad arfat amir', 'muhammad aslam', 'muhammad azeem sarwar', 'muhammad ehtisham', 'muhammad furqan', 'muhammad haseeb hashim', 'muhammad hassaan', 'muhammad hassan', 'muhammad haziq', 'muhammad hunzilah ahmad sheikh', 'muhammad inaam elahi', 'muhammad mohad', 'muhammad taha nasir', 'muhammad talha', 'muhammad umair aziz', 'muhammad umair ismail', 'muhammad zeeshan', 'muhammed bilal', 'musfirah ehsan', 'nimra riaz', 'rabiyya mir', 'rao usama', 'sadaf', 'saeeed ahmad', 'saif ullah', 'samavia jaffery', 'saqib shahzad', 'shams ul hassan', 'shan yousaf', 'sheikh nauman ahmed', 'sijil jehangir', 'sonia ahmad khan', 'sukaina najm', 'syed fahad ullah', 'syed qasim raza', 'taimoor ahmad khan', 'tanveer hussain', 'umar', 'umar tariq', 'umer farooq', 'urwah bin aamer', 'usama shahid', 'warda-tu-zahra', 'zoha assad', 'zubair khan', 'zunair malik']
    },
    'liaison': {
        'coordinators': ['muhammad humzah zaffar'],
        'heads': ['muhammad obaidullah', 'rabiyya mir'],
        'members': ['abdul hannan', 'abdul moeez', 'abdul rehman', 'abdur rehman shamsi', 'ahmed dar', 'ali amin', 'ali hassan', 'asma mohsin', 'ayesha mannan', 'dilawaiz', 'emaan zahra', 'faizan ahmad', 'furqan shaikh', 'hajrah rameen', 'hamza iirshad', 'huzaifa nadeem', 'ihtisham muhammad', 'isra imran', 'junaid rehman', 'kamla bibi', 'khaz khezar ahmed', 'maham ibrar', 'mishal fatima', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullh jawwad', 'muhammad ahmad bashir', 'muhammad arfat amir', 'muhammad dawood bashir', 'muhammad faisal azam', 'muhammad fakhar', 'muhammad hassaan', 'muhammad hassan khan', 'muhammad haziq', 'muhammad sheraz aamir', 'muhammad umair iftikhar', 'muhammad waleed naeem', 'muhammed bilal', 'osama khalid', 'samavia jaffery', 'siddiqua farooq', 'sumama masood', 'syed afnan gillani', 'syed muhammad haider abbas', 'syed qasim raza', 'umer farooq', 'waleed umer', 'hamza atiq', 'aamir abbas', 'iqra ayesha', 'muhammad ahmad', 'muhammad aslam', 'muhammad ehtisham', 'muhammad umair ismail', 'shams ul hassan', 'sonia ahmad khan', 'ammar mukhtar']
    },
    'guest protocol': {
        'coordinators': ['abdul wahab nasir', 'maham saeed'],
        'heads': ['muhammad dawood bashir', 'warda-tu-zahra'],
        'members': ['abdul ahad', 'ahmad kamal baig', 'aleena ajaz', 'amna tabassum', 'ayesha salar', 'hammad ali', 'kashif munir', 'm.haider khan', 'mehwish israr', 'mir hamza', 'muhammad ashhab khan', 'muhammad azeem sarwar', 'muhammad farrukh irfan', 'muhammad furqan', 'muhammad umair aziz', 'muhammad waleed naeem', 'muhammad zakki sohail', 'nimra riaz', 'ruhma khan', 'saleha mushtaq', 'shazil anjum', 'sukaina najm', 'syed afnan gillani', 'syed fahad ullah', 'umar tariq', 'umer husnain', 'uswa fatima', 'zain-ul-hassan', 'zoha assad']
    },
    'videography': {
        'coordinators': ['nabeel ahmed'],
        'heads': ['moeeze hassan', 'shayan khawar'],
        'members': ['aamna khan', 'ahmed abdullah', 'anas zohrab', 'asif mahmood', 'dilawaiz', 'fakhar fatima', 'humair abbas', 'muhammad hassaan', 'muhammad usman khalid', 'sarmad salman', 'umair shaffi']
    },
    'marketing-and-promotion': {
        'coordinators': ['ahsan mukhtar'],
        'heads': ['ali raza', 'junaid rehman'],
        'members': ['zunair sarwar', 'ahamd ghufran', 'ajmal shahzad', 'moeeze hassan', 'muhammad adil', 'nabeel ahmed', 'muhammad hassan khan', 'muhammad hunzilah ahmad sheikh', 'usama shahid', 'muhammad fakhar', 'anas zohrab', 'hassan askary', 'mubashir ali', 'abdul wahab nasir', 'hamza tahir', 'ammar mukhtar']
    }
};

// 'website': {
//     'coordinators': ['name1', 'name2', ...],
//     'heads': ['name1', 'name2', ...],
//     'members': ['name1', 'name2', ...]
// }

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

    if (currentPage == 'index') {
        setupCountdown();
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
    }

    if (currentPage == 'teams') {
        createTeamsPage();
        createTeamsSlider();
    }

    console.log(TAG + 'document: ends');
});

function setupCountdown() {
    console.log('countdown starts');
    window.setInterval(function() {
        var endTime = new Date(2019, 10, 18);
        var currentTime = new Date();
        var remainingTime = (endTime - currentTime) / 1000;
        // var years = Math.floor(remainingTime / (60 * 60 * 24 * 365));
        // remainingTime = remainingTime % (60 * 60 * 24 * 365);
        var months = Math.floor(remainingTime / (60 * 60 * 24 * 30));
        remainingTime = remainingTime % (60 * 60 * 24 * 30);
        var days = Math.floor(remainingTime / (60 * 60 * 24));
        remainingTime = remainingTime % (60 * 60 * 24);
        var hours = Math.floor(remainingTime / (60 * 60));
        remainingTime = remainingTime % (60 * 60);
        var minutes = Math.floor(remainingTime / 60);
        remainingTime = remainingTime % 60;
        var seconds = Math.floor(remainingTime);
        let html = '';
        if (remainingTime > 0) {
            html += '<table>\n';
            html += '    <tbody>\n';
            html += '        <tr>\n';
            html += '            <td class="col-1">second</td>\n';
            html += '            <td class="col-2">' + seconds + '</td>\n';
            html += '        </tr>\n';
            html += '        <tr>\n';
            html += '            <td class="col-1">Minute</td>\n';
            html += '            <td class="col-2">' + minutes + '</td>\n';
            html += '        </tr>\n';
            html += '        <tr>\n';
            html += '            <td class="col-1">Hour</td>\n';
            html += '            <td class="col-2">' + hours + '</td>\n';
            html += '        </tr>\n';
            html += '        <tr>\n';
            html += '            <td class="col-1">Day</td>\n';
            html += '            <td class="col-2">' + days + '</td>\n';
            html += '        </tr>\n';
            html += '        <tr>\n';
            html += '            <td class="col-1">Month</td>\n';
            html += '            <td class="col-2">' + months + '</td>\n';
            html += '        </tr>\n';
            html += '    </tbody>\n';
            html += '</table>\n';
            $('#countdown').html(html);
        } else {
            $('#countdown').html('PION`19 HAS STARTED');
        }
    }, 1000);
    console.log('countdown starts');
}

function createTeamsPage() {
    console.log(TAG + 'createTeamsPage: starts');
    let html = '';
    for (let team_name in TEAMS_DATA) {
        console.log('createTeamsPage: ' + team_name);
        let mentors = TEAMS_DATA[team_name]['mentors'];
        let coordinators = TEAMS_DATA[team_name]['coordinators'];
        let heads = TEAMS_DATA[team_name]['heads'];
        let members = TEAMS_DATA[team_name]['members'];
        html += '<section id="' + team_name + '" class="team-container">\n';
        html += '    <h1>Team ' + team_name + '</h1>\n';
        html += '    <div class="members-container">\n';

        if (mentors) {
            html += '        <div class="mentors">\n';
            for (let name of mentors) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
                html += '                <p class="member-name">' + name + '</p>\n';
                html += '                <p class="member-post">Mentor</p>\n';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        if (coordinators) {
            html += '        <div class="coordinators">\n';
            for (let name of coordinators) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
                html += '                <p class="member-name">' + name + '</p>\n';
                html += '                <p class="member-post">Coordinator</p>\n';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        if (heads) {
            html += '        <div class="heads">\n';
            for (let name of heads) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
                html += '                <p class="member-name">' + name + '</p>\n';
                html += '                <p class="member-post">Head</p>\n';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        if (members) {
            html += '        <div class="members">\n';
            for (let name of members) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/pion19-logo-02.png" alt="Member\'s Image">\n';
                html += '                <p class="member-name">' + name + '</p>\n';
                html += '                <p class="member-post">Member</p>\n';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }

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