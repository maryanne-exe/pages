/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-brand').hover(function() {
    $('.fa-square').addClass('fa-spin');
}, function() {
    $('.fa-square').removeClass('fa-spin');
});


// Script for modal title
$('#skillModal').on('show.bs.modal', function(event)  {

    var current_image = 0;
    var selector = 0;

    var trigger = $(event.relatedTarget);
    var skillName = trigger.data('whatever');
    var modal = $(this);
    modal.find('.modal-title').text(skillName);
    var imgQuantity = trigger.data('caption'); //Get number of images from skill
    $('#preview-image').attr('src', "img/"+skillName+"_"+current_image+".png");
    $('#preview-image').attr('alt', skillName+" "+current_image);

    updateCaption(current_image, skillName);

    $('#show-next-image, #show-previous-image').click(function(){

        if ($(this).attr('id') == 'show-next-image' && current_image<imgQuantity-1) {
            current_image++;
            $('#preview-image').attr('image-id', current_image);
        } else if ($(this).attr('id') == 'show-next-image' && current_image>=imgQuantity-1) {
            $('#preview-image').attr('image-id', 0);
            current_image = 0;
        };

        if ($(this).attr('id') == 'show-previous-image' && current_image!==0) {
            current_image--;
            $('#preview-image').attr('image-id', current_image);
        } else if ($(this).attr('id') == 'show-previous-image' && current_image==0) {
            $('#preview-image').attr('image-id', imgQuantity-1);
            current_image = imgQuantity-1;
        };

        $('#preview-image').attr('src', "img/"+skillName+"_"+current_image+".png");
        $('#preview-image').attr('alt', skillName+" "+current_image);
        $('.description').text(current_image);

        updateCaption(current_image, skillName);

    });


    function updateCaption(current_image, skillName) {
        var $sel = current_image;
        var $skill = skillName;

        if ($skill == "Rapid sketches") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/2. It’s about getting ideas out");
                    $('.description').text("Paper prototyping helps to brainstorm ideas, find best approaches quickly, and detect potential flaws in my solutions before they go to developing reducing the need for changes in the further process. I try to generate, review and analyze as many approaches to the problem as possible in order not to miss anything. My tools at this stage are paper and markers.");
                    $('.imgCaption').text("Sketches for 3d-printer remote control web-interface");
                    break;
                case 1:
                    $('.imgName').text("2/2. Sketches are for sharing");
                    $('.description').text("I'm sketching to visualize my ideas, determine right and inappropriate solutions as fast as possible, and share my thoughts with the team when needed. It helps to quickly describe ideas to teammates without getting into details that are unnecessary on a specific stage. The goal is to find best solutions to work further.");
                    $('.imgCaption').text("Process");
                    break;
            }
        }
        else if ($skill == "Wireframes") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/4. Main idea");
                    $('.description').text("I move to wireframing step when I have general thoughts and solutions regarding UX after sketching and research process. Putting these ideas down raises new questions and leads to more thoughtful solutions.");
                    $('.imgCaption').text("High-fidelity wireframes for iOS application created in Sketch");
                    break;
                case 1:
                    $('.imgName').text("2/4. Iteratively");
                    $('.description').text("Wireframing helps me to keep design process iterative and consistent.");
                    $('.imgCaption').text("Wireframes fow web-based news service created in UXpin");
                    break;
                case 2:
                    $('.imgName').text("3/4. For documents");
                    $('.description').text("I use deliverables in documents and share them with a team. It helps me involve everyone into the process and gain feedback.");
                    $('.imgCaption').text("Descriptions for UI improvments for one SaaS product");
                    break;
                case 3:
                    $('.imgName').text("4/4. Simplicity");
                    $('.description').text("Also, I keep things very simple and limit the color in case not to be distracted by details and hence save time.");
                    $('.imgCaption').text("Wireframe for registration page created in Balsamiq");
                    break;
            }
        }
        else if ($skill == "Working Prototypes") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/2");
                    $('.description').text("I think that designer should have the understanding how controls and UI elements would be implemented: it save plenty of time in discussions and while checking UI implementation for compliance.");
                    $('.imgCaption').text("UI prototype for IOS app in Xcode");
                    break;
                case 1:
                    $('.imgName').text("2/2");
                    $('.description').text("Besides, in some cases, I create interactive prototypes in InVision based on graphic deliverables and images for presentations.");
                    $('.imgCaption').text("UI prototype for IOS app in Xamarin Studio built with c#");
                    break;
            }
        }
        else if ($skill == "Architecture") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/1");
                    $('.description').text("I believe that dealing with information structure and organization at first determine how to proceed with overall user experience, so this process requires to think critical, creative and logical at the same time. An amount of time spend on this process depends on the complicity of the product, but it is a fundamental part of user experience even in developing simple applications.");
                    $('.imgCaption').text("Flow for the desktop app");
                    break;
            }
        }
        else if ($skill == "User Researches") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/1");
                    $('.description').text("A variety of tools from thoughtful questionnaires to online design experiments help to better understand use cases, learn about product's auditory and problems that people face.");
                    $('.imgCaption').text("Transcript of in-person interview");
                    break;
            }
        }
        else if ($skill == "Guidelines") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/3.");
                    $('.description').text("The main goal of writing UX documentations for me is to make them usable and useful. If I work on the web project I create web-based elements and pattern library which is easy to maintain and implement in the application. I clearly describe the right usage of elements, avoid specific words and worthless information.");
                    $('.imgCaption').text("Web-based styleguide");
                    break;
                case 1:
                    $('.imgName').text("2/3");
                    $('.description').text("The approach to begin working on the document as early as possible works best for me because it is less likely to forgot to include important details.");
                    $('.imgCaption').text("Part of the style guide for QT project");
                    break;
                case 2:
                    $('.imgName').text("3/3");
                    $('.description').text("Such kind of document could consist of elements states, descriptions of patterns, sizes, and interactions.");
                    $('.imgCaption').text("Sizes description for window in TeamCity");
                    break;
            }
        }
        else if ($skill == "Psychology") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/2");
                    $('.description').text("I apply my knowledge in psychology when working on interfaces: consider studies of humans visual information perception, habit forming, and decision making.");
                    $('.imgCaption').text("Sidebar improvments: items oredered and grouped as primary and secondary for better perception, improved icons and naming");
                    break;
                case 1:
                    $('.imgName').text("2/2");
                    $('.description').text("I evaluate interfaces according to User Interface Heuristics, set issues priorities and find ways for improvements.");
                    $('.imgCaption').text("Heuristic evaluation of the website.");
                    break;
            }
        }
        else if ($skill == "Interface Design") {
            switch($sel) {
                case 0:
                    $('.imgName').text("1/3");
                    $('.description').text("I move to design stage when work on structure and user flows is finished. At this step, I have deliverables like wireframes, application map, UX documentation.");
                    $('.imgCaption').text("Design for iOS application");
                    break;
                case 1:
                    $('.imgName').text("2/3");
                    $('.description').text("As the main tool I prefer to use Sketch, but I'm proficient in Adobe products as well.");
                    $('.imgCaption').text("Design for iOS application");
                    break;
                case 2:
                    $('.imgName').text("3/3");
                    $('.description').text("At the design step, I pay more attention to consistency, effectiveness, contrast and clarity of the interface. Also, align elements with grids, use white spaces and accurately organize elements.");
                    $('.imgCaption').text("Material Design project");
                    break;
            }

        } else {};
    };

});



// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });

// // Google Maps Scripts
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 15,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York

//         // Disables the default Google Maps UI components
//         disableDefaultUI: true,
//         scrollwheel: false,
//         draggable: false,

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 29
//             }, {
//                 "weight": 0.2
//             }]
//         }, {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 18
//             }]
//         }, {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 21
//             }]
//         }, {
//             "elementType": "labels.text.stroke",
//             "stylers": [{
//                 "visibility": "on"
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "elementType": "labels.text.fill",
//             "stylers": [{
//                 "saturation": 36
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 40
//             }]
//         }, {
//             "elementType": "labels.icon",
//             "stylers": [{
//                 "visibility": "off"
//             }]
//         }, {
//             "featureType": "transit",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 19
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }, {
//                 "weight": 1.2
//             }]
//         }]
//     };

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//     var image = 'img/map-marker.png';
//     var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//     var beachMarker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: image
//     });
// }
