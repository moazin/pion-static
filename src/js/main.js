import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

var TEAMS_DATA = {
    'website': {
        'coordinators': ['ali nauroze', 'moazin khatri'],
        'heads': ['abdul rehman khan', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'management': {
        'coordinators': ['muneeb ur rehman'],
        'heads': ['dawood mazhar', 'khan salik najeeb', 'daud shafqat'],
        'members': ['aamir abbas', 'aamna khan', 'abdul hannan', 'abdul moeez', 'abdul rafay', 'abdul samad', 'ahmad dar', 'ahmad hassan', 'ahmad hussain', 'ahmad kamal baig', 'aleena ajaz', 'ali amin', 'ali hassan', 'aneela riaz', 'aqsa mushtaq', 'asif mahmood', 'ayatullah', 'ayesha salar', 'bibi ayesha', 'bilal ahmad', 'emaan zahra', 'faiz ahmed', 'fareed hussain', 'fasih shaukat', 'hajrah rameen', 'hammad ali', 'hassan abbas', 'hassan askary', 'huzaifa nadeem', 'inaam ullah', 'iqra ayesha', 'kamla bibi', 'kashif munir', 'khan salik najeeb', 'khaz ahmed', 'm. haider khan', 'm. mouaaz ranjha', 'maham ibrar', 'mehwish israr', 'minahil zafar', 'mir hamza', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullah ansari', 'muhammad ahmad', 'mohammad ahmad bashir', 'muhammad ali', 'muhammad arfat amir', 'muhammad aslam', 'muhammad azeem sarwar', 'muhammad ehtisham', 'muhammad furqan', 'muhammad haseeb hashim', 'muhammad hassaan', 'muhammad hassan', 'muhammad haziq', 'muhammad hunzilah', 'muhammad inaam elahi', 'muhammad mohad', 'muhammad taha nasir', 'muhammad talha', 'muhammad umair aziz', 'umair ismail', 'muhammad zeeshan', 'muhammed bilal', 'musfirah ehsan', 'nimra riaz', 'rabiyya mir', 'rao usama', 'sadaf rehmat', 'saeed ahmad', 'saifullah', 'samavia jaffery', 'saqib shahzad', 'shams ul hassan', 'shan yousaf', 'sheikh nauman ahmed', 'sijil jehangir', 'sonia ahmad khan', 'sukaina najm', 'syed fahad ullah', 'syed qasim raza', 'taimoor ahmad khan', 'tanveer hussain', 'umar asif', 'umar tariq', 'umer farooq', 'urwah bin aamer', 'usama shahid', 'warda tu zahra', 'zoha assad', 'zubair khan', 'zunair malik']
    },
    'liaison': {
        'coordinators': ['muhammad humzah zaffar'],
        'heads': ['muhammad obaidullah', 'rabiyya mir'],
        'members': ['abdul hannan', 'abdul moeez', 'abdul rehman', 'abdur rehman shamsi', 'ahmed dar', 'ali amin', 'ali hassan', 'asma mohsin', 'ayesha mannan', 'dilawaiz', 'emaan zahra', 'faizan ahmad', 'furqan shaikh', 'hajrah rameen', 'hamza irshad', 'huzaifa nadeem', 'ihtisham muhammad', 'isra imran', 'junaid rehman', 'kamla bibi', 'khaz ahmed', 'maham ibrar', 'mishal fatima', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullh jawwad', 'mohammad ahmad bashir', 'muhammad arfat amir', 'muhammad dawood bashir', 'muhammad faisal azam', 'muhammad fakhar', 'muhammad hassaan', 'muhammad hassan khan', 'muhammad haziq', 'muhammad sheraz aamir', 'umair iftikhar', 'muhammad waleed naeem', 'muhammed bilal', 'osama khalid', 'samavia jaffery', 'siddiqua farooq', 'sumama masood', 'syed afnan gillani', 'syed muhammad haider abbas', 'syed qasim raza', 'umer farooq', 'waleed umer', 'hamza atiq', 'aamir abbas', 'iqra ayesha', 'muhammad ahmad', 'muhammad aslam', 'muhammad ehtisham', 'umair ismail', 'shams ul hassan', 'sonia ahmad khan', 'ammar mukhtar']
    },
    'guest protocol': {
        'coordinators': ['abdul wahab nasir', 'maham saeed'],
        'heads': ['muhammad dawood bashir', 'warda tu zahra'],
        'members': ['abdul ahad', 'ahmad kamal baig', 'aleena ajaz', 'amina tabassum', 'ayesha salar', 'hammad ali', 'kashif munir', 'm. haider khan', 'mehwish israr', 'mir hamza', 'ashhab khan', 'muhammad azeem sarwar', 'muhammad farrukh irfan', 'muhammad furqan', 'muhammad umair aziz', 'muhammad waleed naeem', 'muhammad zakki sohail', 'nimra riaz', 'ruhma khan', 'saleha mushtaq', 'shazil anjum', 'sukaina najm', 'syed afnan gillani', 'syed fahad ullah', 'umar tariq', 'umer husnain', 'uswa fatima', 'zain ul hassan', 'zoha assad']
    },
    'videography': {
        'coordinators': ['nabeel ahmed'],
        'heads': ['moeeze hassan', 'shayan khawar'],
        'members': ['aamna khan', 'ahmed abdullah', 'anas zohrab', 'asif mahmood', 'dilawaiz', 'fakhar fatima', 'humair abbas', 'muhammad hassaan', 'muhammad usman khalid', 'sarmad salman', 'umair shaffi']
    },
    'marketing & promotion': {
        'coordinators': ['ahsan mukhtar'],
        'heads': ['ali raza', 'junaid rehman'],
        'members': ['ahmad ghufran', 'ajmal shahzad', 'moeeze hassan', 'muhammad adil', 'nabeel ahmed', 'muhammad hassan khan', 'muhammad hunzilah', 'usama shahid', 'muhammad fakhar', 'anas zohrab', 'hassan askary', 'mubashir ali', 'abdul wahab nasir', 'hamza tahir', 'ammar mukhtar']
    },
    'security': {
        'coordinators': ['abdul ahad'],
        'heads': ['aamir abbas', 'waleed akhtar'],
        'members': ['aroosha pervaiz', 'abdur rehman', 'ashhab khan', 'muhammad abdullah ansari', 'umar shahzad', 'asad ali', 'hamza atiq', 'faiz ahmed', 'fareed hussain', 'tanveer hussain', 'abdullah ahmad', 'muhammad zeeshan', 'muhammad sabeeh', 'usama shahid', 'osama khalid', 'muhammad farrukh irfan', 'muhammad haseeb hashim', 'ihtisham muhammad']
    },
    'messing': {
        'coordinators': ['assad sultan'],
        'heads': ['shaheer farooq', 'inaam ullah'],
        'members': ['abdur rehman', 'ahmad hassan', 'muhammad sabeeh', 'umar asif', 'mohammad sanaullah', 'khan salik najeeb', 'm. haider khan', 'muhammad abdullah ansari', 'muhammad azeem sarwar', 'muhammad umair aziz', 'ashhab khan', 'ayesha mannan', 'hajrah rameen', 'tooba maryam', 'uswa fatima']
    },
    'photography': {
        'coordinators': ['ayesha ali'],
        'heads': ['sarmad salman', 'bilal ahmad'],
        'members': ['aamna khan', 'abdul samad', 'adil tiwana', 'ahmed abdullah', 'ayesha mannan', 'fakhar fatima', 'hamza irshad', 'hamza shabeer', 'hassan abbas', 'muhammad hassan khan', 'irtaza ahmad', 'umair iftikhar', 'zain rehman', 'siddiqua farooq', 'tehreem hussain', 'marwa madni', 'muhammad sabeeh', 'muhammad hassan', 'muhammad hassaan', 'narmeen falak', 'ahsan mukhtar', 'zunnayyara khalid']
    },
    'accommodation': {
        'coordinators': ['ajmal shahzad', 'saleha mushtaq'],
        'heads': ['furqan shaikh', 'muhammad aslam'],
        'members': ['umar asif', 'zubair khan', 'inaam ullah', 'muhammad abdullah ansari', 'muhammad mohad', 'musfirah ehsan', 'faiz ahmed', 'shazil anjum', 'khizer saeed', 'syed qasim raza', 'muhammad fakhar']
    },
    'documentation': {
        'coordinators': ['minhaj ansari', 'amina tabassum'],
        'heads': ['ahmed dar', 'ammar mukhtar'],
        'members': ['abdul wahab nasir', 'furqan shaikh', 'muhammad mohad', 'tehreem hussain', 'usama shahid', 'huzaifa ahmed', 'muhammad furqan', 'rana gufran', 'umar shahzad', 'waleed umer', 'zubair khan', 'shazil anjum', 'dilawaiz', 'saeed ahmad', 'faiz ahmed', 'm. haider khan', 'minahil zafar', 'mohammad ahmad bashir', 'muhammad hunzilah', 'musfirah ehsan', 'samavia jaffery', 'wasif jan', 'junaid rehman']
    },
    'transport': {
        'coordinators': ['muhammad hassan'],
        'heads': ['tanveer hussain', 'abdul rafay'],
        'members': ['zain ul hassan', 'muhammad mohad', 'shan yousaf', 'syed muhammad haider abbas', 'umar asif', 'muhammad umar', 'muhammad inaam elahi', 'zunair malik', 'abdur rehman shamsi', 'rao usama', 'asad ali', 'ameer hamza', 'abdullah ahmad']
    },
    'design': {
        'coordinators': ['mubashir ali'],
        'heads': ['hassan sattar', 'fakhar fatima', 'yousma yousaf'],
        'members': ['muhammad usman khalid', 'aqsa mushtaq', 'sheikh nauman ahmed', 'talha amjad', 'humair abbas', 'isra imran', 'fasih shaukat', 'sijil jehangir', 'shaharyar sajid', 'dawood mazhar', 'khizer saeed', 'dilawaiz', 'narmeen falak', 'muhammad haziq', 'emaan zahra', 'nimra anjum']
    },
    'finance & purchase': {
        'coordinators': ['hamza ahmed'],
        'heads': ['osama khalid', 'rana gufran'],
        'members': ['usama shahid', 'faraaz muhammad khan', 'hamza irshad', 'muhammad mohad', 'sadaf rehmat', 'ruman tahir', 'mohammad sanaullah', 'maham saeed', 'faisal', 'muhammad furqan', 'ammar mukhtar', 'hurairah javed', 'khaz ahmed']
    },
    'decoration': {
        'coordinators': ['muhammad umair aziz'],
        'heads': ['nimra riaz', 'bibi ayesha'],
        'members': ['ahmad hussain', 'aneela riaz', 'huzaifa ahmed', 'linta kamran', 'm. mouaaz ranjha', 'mehwish israr', 'minahil zafar', 'muhammad abdullh jawwad', 'muhammad ali', 'muhammad faisal azam', 'muhammad hassan', 'muhammad taha nasir', 'muhammad talha', 'rao usama', 'taimoor ahmad khan', 'muhammad aslam']
    },
    'carnival': {
        'coordinators': ['ahmad raza'],
        'heads': ['muhammad sheraz aamir', 'muhammad hassaan'],
        'members': ['ahmad dar', 'ammar mukhtar', 'inaam ullah', 'saad rafiq', 'tauqeer nasir', 'abdur rehman', 'ahad ghufran', 'ahmed abdullah', 'ayatullah', 'muhammad adil', 'muneeb ur rehman', 'saifullah', 'sumama masood', 'zubair khan', 'umer husnain', 'khizer saeed', 'abdul rehman']
    },
    'sponsorship': {
        'coordinators': ['saifullah', 'arslan khalid'],
        'heads': ['khaz ahmed', 'wasif jan'],
        'members': ['ahad ghufran', 'usama shahid', 'hamza tahir', 'ahsan mukhtar', 'ajmal shahzad', 'daud shafqat', 'muhammad usman khalid', 'talha bilal', 'muhammad zakki sohail', 'ruman tahir', 'mubashir ali', 'abdul wahab nasir', 'hamza ahmed', 'marwa madni']
    },
};

var MODULES_DATA = {
    'module-01': {
        'title': 'module name 1',
        'head': {
            'name': 'module head name',
            'contact': '0331-1234567'
        },
        'category': 'category',
        'fee': 'Rs. ####',
        'minimum members': '1',
        'maximum members': '3',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        'rules': [
            'Rule#1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        ]
    },
    'module-02': {
        'title': 'module name 2',
        'head': {
            'name': 'module head name',
            'contact': '0331-1234567'
        },
        'category': 'category',
        'fee': 'Rs. ####',
        'minimum members': '1',
        'maximum members': '3',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        'rules': [
            'Rule#1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        ]
    },
    'module-03': {
        'title': 'module name 3',
        'head': {
            'name': 'module head name',
            'contact': '0331-1234567'
        },
        'category': 'category',
        'fee': 'Rs. ####',
        'minimum members': '1',
        'maximum members': '3',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        'rules': [
            'Rule#1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        ]
    },
    'module-04': {
        'title': 'module name 13',
        'head': {
            'name': 'module head name',
            'contact': '0331-1234567'
        },
        'category': 'category',
        'fee': 'Rs. ####',
        'minimum members': '1',
        'maximum members': '3',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        'rules': [
            'Rule#1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
            'Rule#4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem consequuntur deleniti voluptas inventore earum nam, cum vitae atque cumque optio corporis reiciendis neque ducimus culpa dolorum, at sunt aliquam.',
        ]
    },
};

var currentPage = '';
var images = ['images/mic-01.jpg', 'images/mic-02.jpg', 'images/mic-03.jpg'];
var imageIndex = 0;
var videos = ['videos/video-01.mp4', 'videos/video-02.mp4'];
var videoIndex = 0;
var TAG = '[main.js] : ';

$(function() {
    console.log(TAG + 'document: starts');

    let htmlPath = window.location.href;
    // let domainName = 'pionpieas.com';
    let domainName = 'localhost:8080';
    let startIndex = htmlPath.search(domainName + '/(.)+.html');
    let endIndex = htmlPath.search('.html');
    currentPage = htmlPath.substring(startIndex + domainName.length + 1, endIndex);
    $('.active').removeClass('active');

    console.log(TAG + 'htmlPath: ' + htmlPath);
    console.log(TAG + 'domainName: ' + domainName);
    console.log(TAG + 'domainName.length: ' + domainName.length);
    console.log(TAG + 'startIndex: ' + startIndex);
    console.log(TAG + 'endIndex: ' + endIndex);
    console.log(TAG + 'currentPage: ' + currentPage);

    $('#nav-menu-control').click(function() {
        console.log(TAG + 'nav-menu-control click: starts');
        $('#nav-menu').slideToggle();
        $('#nav-menu').toggleClass('nav-menu-toggle');
        console.log(TAG + 'nav-menu-control click: ends');
    });

    switch (currentPage) {
        case 'about-us':
            console.log(TAG + 'case about-us: setting up about-us.html');
            $('#nav-menu a[fileName="about-us"]').addClass('active');
            break;
        case 'modules':
            console.log(TAG + 'case modules: setting up modules.html');
            $('#nav-menu a[fileName="modules"]').addClass('active');
            createModulesPage();
            $('#search-bar #search-input').keyup(function() {
                console.log('search-input keypress: starts');
                let searchString = $('#search-bar #search-input').val();
                console.log('search-input keypress: ' + searchString);
                console.log(searchString.length);
                if (searchString.length > 0) {
                    let modulesList = $('#modules-list .module-card');
                    console.log(modulesList.length);
                    for (let module of modulesList) {
                        let id = $(module).attr('id');
                        let searchIndex = MODULES_DATA[id]['title'].search(searchString);
                        if (searchIndex >= 0) {
                            console.log('showing -> ' + MODULES_DATA[id]['title']);
                            $(module).show();
                        } else {
                            console.log('hiding -> ' + MODULES_DATA[id]['title']);
                            $(module).hide();
                        }
                    }
                } else {
                    $('#modules-list .module-card').show();
                }
                console.log('search-input keypress: ends');
            });
            $('#module-detail-container #module-detail-card').scroll(function() {
                $('#module-detail-card img').css('top', this.scrollTop);
            });
            break;
        case 'timeline':
            console.log(TAG + 'case timeline: setting up timeline.html');
            $('#nav-menu a[fileName="timeline"]').addClass('active');
            break;
        case 'teams':
            console.log(TAG + 'case teams: setting up teams.html');
            $('#nav-menu a[fileName="teams"]').addClass('active');
            createTeamsPage();
            createTeamsSlider();
            break;
        case 'gallery':
            console.log(TAG + 'case gallery: setting up gallery.html');
            $('#nav-menu a[fileName="gallery"]').addClass('active');
            break;
        case 'contact-us':
            console.log(TAG + 'case contact-us: setting up contact-us.html');
            $('#nav-menu a[fileName="contact-us"]').addClass('active');
            break;
        default:
            console.log(TAG + 'case default: setting up index.html');
            $('#nav-menu a[fileName="index"]').addClass('active');
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
            break;
    }

    console.log(TAG + 'document: ends');
});

function createModulesPage() {
    console.log(TAG + 'createModulesPage: starts');
    let html = '';
    let clickedCard;
    for (let module_id in MODULES_DATA) {
        let module = MODULES_DATA[module_id];
        html += '<div id="' + module_id + '" class="module-card">\n';
        html += '    <img class="module-image" src="images/placeholder - 256.jpg">\n';
        html += '    <p class="title">' + module['title'] + '</p>\n';
        html += '    <p class="head-name">' + module['head']['name'] + '</p>\n';
        html += '    <p class="head-contact">' + module['head']['contact'] + '</p>\n';
        html += '</div>\n';
    }
    $('#modules #modules-list').html(html);
    $('#modules-list .module-card').click(function() {
        console.log('module-card click: starts');
        showModuleDetail(this);
        clickedCard = this;
        console.log('module-card click: ends');
    });
    $('#module-detail-container #container-close').click(function() {
        console.log('container-close clicked');
        $('#module-detail-container').css('visibility', 'hidden');
    });
    $('#module-detail-container #module-previous').click(function() {
        console.log('module-previous clicked');
        showModuleDetail($(clickedCard).prev());
        clickedCard = $(clickedCard).prev();
    });
    $('#module-detail-container #module-next').click(function() {
        console.log('module-next clicked');
        showModuleDetail($(clickedCard).next());
        clickedCard = $(clickedCard).next();
    });
    console.log(TAG + 'createModulesPage: ends');
}

function showModuleDetail(inputModule) {
    console.log('showModuleDetail: starts');
    console.log(inputModule);
    let clickedModuleId = $(inputModule).attr('id');
    let module = MODULES_DATA[clickedModuleId];
    let moduleDetails = '';
    moduleDetails += '<p id="module-title"><strong>Title: </strong>' + module['title'] + '</p>\n';
    moduleDetails += '<p id="module-head-name"><strong>Head: </strong>' + module['head']['name'] + '</p>\n';
    moduleDetails += '<p id="module-head-contact"><strong>Contact: </strong>' + module['head']['contact'] + '</p>\n';
    moduleDetails += '<p id="module-category"><strong>Category: </strong>' + module['category'] + '</p>\n';
    moduleDetails += '<p id="module-fee"><strong>Fee: </strong>' + module['fee'] + '</p>\n';
    moduleDetails += '<p id="minimum-members"><strong>Minimum Members: </strong>' + module['minimum members'] + '</p>\n';
    moduleDetails += '<p id="maximum-members"><strong>Maximum Members: </strong>' + module['maximum members'] + '</p>\n';
    moduleDetails += '<p id="module-description"><strong>Description: </strong>' + module['description'] + '</p>\n';
    moduleDetails += '<p><strong>Rules: </strong></p>\n';
    moduleDetails += '<ul id="module-rules">\n';
    for (let rule of module['rules']) {
        moduleDetails += '    <li>' + rule + '</li>\n';
    }
    moduleDetails += '</ul>\n';
    $('#module-detail-container #module-detail').html(moduleDetails);
    $('#module-detail-container').css('visibility', 'visible');
    console.log('showModuleDetail: ends');
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
    $('#teams').append(html);
    // console.log($('.team-member img'));
    var error_names = '';
    $('img').on('error', function(e) {
        // console.log('error occured');
        // let path = $(this).attr('src');
        // let startIndex = path.search('members/(.)+.jpg');
        // let endIndex = path.search('.jpg');
        // let name = path.substring(startIndex + 8, endIndex);
        // error_names += name + ', ';
        // console.log(error_names);
        $(this).attr('src', 'images/placeholder-person - 256.jpg');
    });
    console.log(TAG + 'createTeamsPage: ends');
}

function createTeamsSlider() {
    console.log('createTeamsSlider: starts');
    let sections = $('main section');
    console.log('section -> ' + sections.length);

    let html = '<ul>\n';
    for (let i = 0; i < sections.length; i++) {
        // console.log(sections[i]);
        html += '    <li>\n';
        html += '        <span id="tooltip">' + $(sections[i]).attr('id') + '</span>\n';
        html += '        <a href="#' + $(sections[i]).attr('id') + '">•</a>\n';
        html += '    </li>\n';
    }
    html += '</ul>';
    // console.log(html);
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
            // console.log('changing time');
            // console.log('months' + months);
            // console.log('days' + days);
            // console.log('hours' + hours);
            // console.log('minutes' + minutes);
            // console.log('seconds' + seconds);
            // console.log($('#countdown td#col1').html());
            // console.log($('#countdown td#col2').html());
            // console.log($('#countdown td#col3').html());
            // console.log($('#countdown td#col4').html());
            // console.log($('#countdown td#col5').html());
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