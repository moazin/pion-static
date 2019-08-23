import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// var $ = require('jquery');
// require('popper.js');
// require('bootstrap');

var TEAMS_DATA = {
    'website': {
        'coordinators': ['ali nauroze', 'moazin khatri'],
        'heads': ['abdul rehman khan', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'management': {
        'coordinators': ['muneeb ur rehman'],
        'heads': ['dawood mazhar', 'khan salik najeeb', 'daud shafqat'],
        'members': ['aamir abbas', 'aamna khan', 'abdul hannan', 'abdul moeez', 'abdul rafay', 'abdul samad', 'ahmed dar', 'ahmad hassan', 'ahmad hussain', 'ahmad kamal baig', 'aleena ajaz', 'ali amin', 'ali hassan', 'aneela riaz', 'aqsa mushtaq', 'asif mahmood', 'ayatullah saifullah', 'ayesha salar', 'bibi ayisha', 'bilal ahmad', 'emaan zahra', 'faiz ahmed', 'fareed hussain', 'fasih shaukat', 'hajrah rameen', 'hammad ali', 'hassan abbas', 'hassan askary', 'huzaifa nadeem', 'inaam ullah', 'iqra ayesha', 'kamla bibi', 'kashif munir', 'khan salik najeeb', 'khaz ahmed', 'm. haider khan', 'm. mouaaz ranjha', 'maham ibrar', 'mehwish israr', 'minahil zafar', 'mir hamza', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullah ansari', 'muhammad ahmad', 'muhammad ahmad bashir', 'muhammad ali', 'muhammad arfat amir', 'muhammad aslam', 'muhammad azeem sarwar', 'muhammad ehtisham', 'muhammad furqan', 'muhammad haseeb hashim', 'muhammad hassaan', 'muhammad hassan', 'muhammad haziq', 'muhammad hunzilah', 'muhammad inaam elahi', 'muhammad mohad', 'muhammad taha nasir', 'muhammad talha', 'muhammad umair aziz', 'muhammad umair ismail', 'muhammad zeeshan', 'muhammed bilal', 'musfirah ehsan', 'nimra riaz', 'rabiyya mir', 'rao usama', 'sadaf', 'saeeed ahmad', 'saif ullah', 'samavia jaffery', 'saqib shahzad', 'shams ul hassan', 'shan yousaf', 'sheikh nauman ahmed', 'sijil jehangir', 'sonia ahmad khan', 'sukaina najm', 'syed fahad ullah', 'syed qasim raza', 'taimoor ahmad khan', 'tanveer hussain', 'umar asif', 'umar tariq', 'umer farooq', 'urwah bin aamer', 'usama shahid', 'warda tu zahra', 'zoha assad', 'zubair khan', 'zunair malik']
    },
    'liaison': {
        'coordinators': ['muhammad humzah zaffar'],
        'heads': ['muhammad obaidullah', 'rabiyya mir'],
        'members': ['abdul hannan', 'abdul moeez', 'abdul rehman', 'abdur rehman shamsi', 'ahmed dar', 'ali amin', 'ali hassan', 'asma mohsin', 'ayesha mannan', 'dilawaiz', 'emaan zahra', 'faizan ahmad', 'furqan shaikh', 'hajrah rameen', 'hamza irshad', 'huzaifa nadeem', 'ihtisham muhammad', 'isra imran', 'junaid rehman', 'kamla bibi', 'khaz ahmed', 'maham ibrar', 'mishal fatima', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullh jawwad', 'muhammad ahmad bashir', 'muhammad arfat amir', 'muhammad dawood bashir', 'muhammad faisal azam', 'muhammad fakhar', 'muhammad hassaan', 'muhammad hassan khan', 'muhammad haziq', 'muhammad sheraz aamir', 'muhammad umair iftikhar', 'muhammad waleed naeem', 'muhammed bilal', 'osama khalid', 'samavia jaffery', 'siddiqua farooq', 'sumama masood', 'syed afnan gillani', 'syed muhammad haider abbas', 'syed qasim raza', 'umer farooq', 'waleed umer', 'hamza atiq', 'aamir abbas', 'iqra ayesha', 'muhammad ahmad', 'muhammad aslam', 'muhammad ehtisham', 'muhammad umair ismail', 'shams ul hassan', 'sonia ahmad khan', 'ammar mukhtar']
    },
    'guest protocol': {
        'coordinators': ['abdul wahab nasir', 'maham saeed'],
        'heads': ['muhammad dawood bashir', 'warda tu zahra'],
        'members': ['abdul ahad', 'ahmad kamal baig', 'aleena ajaz', 'amina tabassum', 'ayesha salar', 'hammad ali', 'kashif munir', 'm. haider khan', 'mehwish israr', 'mir hamza', 'muhammad ashhab khan', 'muhammad azeem sarwar', 'muhammad farrukh irfan', 'muhammad furqan', 'muhammad umair aziz', 'muhammad waleed naeem', 'muhammad zakki sohail', 'nimra riaz', 'ruhma khan', 'saleha mushtaq', 'shazil anjum', 'sukaina najm', 'syed afnan gillani', 'syed fahad ullah', 'umar tariq', 'umer husnain', 'uswa fatima', 'zain ul hassan', 'zoha assad']
    },
    'videography': {
        'coordinators': ['nabeel ahmed'],
        'heads': ['moeeze hassan', 'shayan khawar'],
        'members': ['aamna khan', 'ahmed abdullah', 'anas zohrab', 'asif mahmood', 'dilawaiz', 'fakhar fatima', 'humair abbas', 'muhammad hassaan', 'muhammad usman khalid', 'sarmad salman', 'umair shaffi']
    },
    'marketing & promotion': {
        'coordinators': ['ahsan mukhtar'],
        'heads': ['ali raza', 'junaid rehman'],
        'members': ['ahmad ghufran', 'ajmal shahzad', 'moeeze hassan', 'muhammad adil', 'nabeel ahmed', 'muhammad hassan khan', 'muhammad hunzilah', 'ahmad sheikh', 'usama shahid', 'muhammad fakhar', 'anas zohrab', 'hassan askary', 'mubashir ali', 'abdul wahab nasir', 'hamza tahir', 'ammar mukhtar']
    },
    'security': {
        'coordinators': ['abdul ahad'],
        'heads': ['aamir abbas', 'waleed akhtar'],
        'members': ['aroosha pervaiz', 'abdur rahman', 'muhammad ashhab khan', 'muhammad abdullah ansari', 'umar shehzad', 'asad ali', 'hamza atiq', 'faiz ahmed', 'fareed hussain', 'tanveer hussain', 'abdullah ahmad', 'muhammad zeeshan', 'muhammad sabeeh', 'usama shahid', 'osama khalid', 'muhammad farrukh irfan', 'muhammad haseeb hashim', 'ihtisham muhammad']
    },
    'messing': {
        'coordinators': ['assad sultan'],
        'heads': ['shaheer farooq', 'inaam ullah'],
        'members': ['abdur rehman', 'ahmad hassan', 'muhammad sabeeh', 'umar asif', 'mohammad sanaullah', 'khan salik najeeb', 'm. haider khan', 'muhammad abdullah ansari', 'muhammad azeem sarwar', 'muhammad umair aziz', 'muhammad ashhab khan', 'ayesha mannan', 'hajrah rameen', 'tooba maryam', 'uswa fatima']
    },
    'photography': {
        'coordinators': ['ayesha ali'],
        'heads': ['sarmad salman', 'bilal ahmad'],
        'members': ['aamna khan', 'abdul samad', 'adil tiwana', 'ahmed abdullah', 'ayesha mannan', 'fakhar fatima', 'hamza irshad', 'hamza shabeer', 'hassan abbas', 'muhammad hassan khan', 'irtza ahmed', 'muhammad umair iftikhar', 'muhammad zain rehman', 'siddiqua farooq', 'tehreem hussain', 'marwa madni', 'muhammad sabeeh', 'muhammad hassan', 'muhammad hassaan', 'narmeen falak', 'ahsan mukhtar', 'zunnayyara khalid']
    },
    'accommodation': {
        'coordinators': ['ajmal shahzad', 'saleha mushtaq'],
        'heads': ['furqan shaikh', 'muhammad aslam'],
        'members': ['umar asif', 'zubair khan', 'inaam ullah', 'muhammad abdullah ansari', 'muhammad mohad', 'musfirah ehsan', 'faiz ahmed', 'shazil anjum', 'khizer saeed', 'syed qasim raza', 'muhammad fakhar']
    },
    'documentation': {
        'coordinators': ['minhaj ansari', 'amina tabassum'],
        'heads': ['ahmed dar', 'ammar mukhtar'],
        'members': ['abdul wahab nasir', 'furqan shaikh', 'muhammad mohad', 'tehreem hussain', 'usama shahid', 'huzaifa ahmed', 'muhammad furqan', 'rana gufran', 'umar shehzad', 'waleed umer', 'zubair khan', 'shazil anjum', 'dilawaiz', 'saeeed ahmad', 'faiz ahmed', 'm. haider khan', 'minahil zafar', 'muhammad ahmad bashir', 'muhammad hunzilah ahmad sheikh', 'musfirah ehsan', 'samavia jaffery', 'wasif jan', 'junaid rehman']
    },
    'transport': {
        'coordinators': ['muhammad hassan'],
        'heads': ['tanveer hussain', 'abdul rafay'],
        'members': ['zain ul hassan', 'muhammad mohad', 'shan yousaf', 'syed muhammad haider abbas', 'umar asif', 'muhammad umar', 'muhammad inaam elahi', 'zunair malik', 'abdur rehman shamsi', 'rao usama', 'asad ali', 'ameer hamza', 'abdullah ahmad']
    },
    'design': {
        'coordinators': ['mubashir ali'],
        'heads': ['fakhar fatima', 'yousma yousaf'],
        'members': ['muhammad usman khalid', 'aqsa mushtaq', 'sheikh nauman ahmed', 'talha amjad', 'humair abbas', 'isra imran', 'fasih shaukat', 'sijil jehangir', 'shaharyar sajid', 'hassan sattar', 'dawood mazhar', 'khizer saeed', 'dilawaiz', 'narmeen falak', 'muhammad haziq', 'emaan zahra', 'nimra anjum']
    },
    'finance & purchase': {
        'coordinators': ['hamza ahmed'],
        'heads': ['osama khalid', 'rana gufran'],
        'members': ['usama shahid', 'faraaz muhammad khan', 'hamza irshad', 'muhammad mohad', 'sadaf', 'ruman tahir', 'mohammad sanaullah', 'maham saeed', 'faisal', 'muhammad furqan', 'ammar mukhtar', 'hurairah javed', 'khaz ahmed']
    },
    'decoration': {
        'coordinators': ['muhammad umair aziz'],
        'heads': ['nimra riaz', 'bibi ayesha'],
        'members': ['ahmad hussain', 'aneela riaz', 'huzaifa ahmed', 'linta kamran', 'm. mouaaz ranjha', 'mehwish israr', 'minahil zafar', 'muhammad abdullh jawwad', 'muhammad ali', 'muhammad faisal azam', 'muhammad hassan', 'muhammad taha nasir', 'muhammad talha', 'rao usama', 'taimoor ahmad khan', 'muhammad aslam']
    },
    'carnival': {
        'coordinators': ['ahmad raza'],
        'heads': ['muhammad sheraz aamir', 'muhammad hassaan'],
        'members': ['ahmed dar', 'ammar mukhtar', 'inaam ullah', 'saad rafiq', 'tauqeer nasir', 'abdur rahman', 'ahad ghufran', 'ahmed abdullah', 'ayatullah', 'muhammad adil', 'muneeb ur rehman', 'saif ullah', 'sumama masood', 'zubair khan', 'umer husnain', 'khizer saeed', 'abdul rehman']
    },
    'sponsorship': {
        'coordinators': ['saifullah', 'arslan khalid'],
        'heads': ['khaz ahmed', 'wasif jan'],
        'members': ['ahad ghufran', 'usama shahid', 'hamza tahir', 'ahsan mukhtar', 'ajmal shahzad', 'daud shafqat', 'muhammad usman khalid', 'talha bilal', 'muhammad zakki sohail', 'ruman tahir', 'mubashir ali', 'abdul wahab nasir', 'hamza ahmed', 'marwa madni']
    },
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
    // let domainName = 'pionpieas.com';
    let domainName = 'localhost:8080';
    let startIndex = htmlPath.search(domainName + '/(.)+.html');
    let endIndex = htmlPath.search('.html');
    currentPage = htmlPath.substring(startIndex + domainName.length + 1, endIndex);
    let navItems = $('#nav-menu a');
    $('.active').removeClass('active');
    for (let i of navItems) {
        if ($(i).attr('fileName') == currentPage) {
            $(i).addClass('active');
        }
    }

    console.log(TAG + 'currentPage: ' + currentPage);

    $('#nav-menu-control').click(function() {
        console.log(TAG + 'nav-menu-control click: starts');
        $('#nav-menu').slideToggle();
        $('#nav-menu').toggleClass('nav-menu-toggle');
        console.log(TAG + 'nav-menu-control click: ends');
    });

    if (currentPage == 'teams') {
        console.log('setting up teams.html');
        createTeamsPage();
        createTeamsSlider();
    } else {
        console.log('setting up index.html');
        setupCountdown();
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

    console.log(TAG + 'document: ends');
});

function setupCountdown() {
    console.log('countdown starts');
    $('#countdown-end-msg').hide();
    $('#countdown').show();
    window.setInterval(function() {
        console.log('window.setInterval starts');
        var endTime = new Date(2019, 10, 18);
        var currentTime = new Date();
        var remainingTime = (endTime - currentTime) / 1000;
        var months = twoChars(Math.floor(remainingTime / (60 * 60 * 24 * 30)));
        remainingTime = remainingTime % (60 * 60 * 24 * 30);
        var days = twoChars(Math.floor(remainingTime / (60 * 60 * 24)));
        remainingTime = remainingTime % (60 * 60 * 24);
        var hours = twoChars(Math.floor(remainingTime / (60 * 60)));
        remainingTime = remainingTime % (60 * 60);
        var minutes = twoChars(Math.floor(remainingTime / 60));
        remainingTime = remainingTime % 60;
        var seconds = twoChars(Math.floor(remainingTime));
        let html = '';
        if (remainingTime > 0) {
            console.log('changing time');
            console.log('months' + months);
            console.log('days' + days);
            console.log('hours' + hours);
            console.log('minutes' + minutes);
            console.log('seconds' + seconds);
            console.log($('#countdown td#col1').html());
            console.log($('#countdown td#col2').html());
            console.log($('#countdown td#col3').html());
            console.log($('#countdown td#col4').html());
            console.log($('#countdown td#col5').html());
            $('#countdown td#col1').html(months);
            $('#countdown td#col2').html(days);
            $('#countdown td#col3').html(hours);
            $('#countdown td#col4').html(minutes);
            $('#countdown td#col5').html(seconds);
        } else {
            $('#countdown-container p').hide();
            $('#countdown-container #countdown').hide();
            $('#countdown-container #countdown-end-msg').show();
        }
    }, 1000);
    console.log('countdown starts');
}

function twoChars(number) {
    return (('' + number).length == 1) ? '0' + number : '' + number
}

function createTeamsPage() {
    console.log(TAG + 'createTeamsPage: starts');
    let html = '';
    for (let team_name in TEAMS_DATA) {
        console.log('createTeamsPage: ' + team_name);
        let coordinators = TEAMS_DATA[team_name]['coordinators'].sort();
        let heads = TEAMS_DATA[team_name]['heads'].sort();
        let members = TEAMS_DATA[team_name]['members'].sort();
        html += '<section id="' + team_name + '" class="team-container">\n';
        html += '    <h1>Team ' + team_name + '</h1>\n';
        html += '    <div class="members-container">\n';

        if (coordinators) {
            html += '        <div class="coordinators">\n';
            for (let name of coordinators) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/images-coordinators/' + name + '.jpg">\n';
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
                html += '                <img src="images/images-heads/' + name + '.jpg">\n';
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
                html += '                <img src="images/images-members/' + name + '.jpg">\n';
                html += '                <p class="member-name">' + name + '</p>\n';
                html += '                <p class="member-post">Member</p>\n';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }

        html += '    </div>\n';
        html += '</section>\n';
    }
    console.log('before append');
    $('#teams').append(html);
    console.log('after append');
    console.log($('.team-member img'));
    var error_names = '';
    $('img').on('error', function() {
        console.log('error occured');
        let path = $(this).attr('src');
        let startIndex = path.search('members/(.)+.jpg');
        let endIndex = path.search('.jpg');
        let name = path.substring(startIndex + 8, endIndex);
        error_names += name + ', ';
        console.log(error_names);
        $(this).attr('src', 'images/placeholder - 256.jpg');
    });
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







// html += '<table>\n';
// html += '    <tbody>\n';
// html += '        <tr>\n';
// html += '            <td class="col-2">' + months + '</td>\n';
// html += '            <td class="col-1">Month</td>\n';
// html += '        </tr>\n';
// html += '        <tr>\n';
// html += '            <td class="col-2">' + days + '</td>\n';
// html += '            <td class="col-1">Day</td>\n';
// html += '        </tr>\n';
// html += '        <tr>\n';
// html += '            <td class="col-2">' + hours + '</td>\n';
// html += '            <td class="col-1">Hour</td>\n';
// html += '        </tr>\n';
// html += '        <tr>\n';
// html += '            <td class="col-2">' + minutes + '</td>\n';
// html += '            <td class="col-1">Minute</td>\n';
// html += '        </tr>\n';
// html += '        <tr>\n';
// html += '            <td class="col-2">' + seconds + '</td>\n';
// html += '            <td class="col-1">second</td>\n';
// html += '        </tr>\n';
// html += '    </tbody>\n';
// html += '</table>\n';

// html += '<table>\n';
// html += '    <tbody>\n';
// html += '        <tr id="row1">\n';
// html += '            <td>' + twoChars(months) + '</td>\n';
// html += '            <td>' + twoChars(days) + '</td>\n';
// html += '            <td>' + twoChars(hours) + '</td>\n';
// html += '            <td>' + twoChars(minutes) + '</td>\n';
// html += '            <td>' + twoChars(seconds) + '</td>\n';
// html += '        </tr>\n';
// html += '        <tr id="row2">\n';
// html += '            <td>Month</td>\n';
// html += '            <td>Day</td>\n';
// html += '            <td>Hour</td>\n';
// html += '            <td>Minute</td>\n';
// html += '            <td>second</td>\n';
// html += '        </tr>\n';
// html += '    </tbody>\n';
// html += '</table>\n';