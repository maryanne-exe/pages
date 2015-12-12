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
        $('.imgCaption').text(current_image);

        updateCaption(current_image, skillName);

    });


    function updateCaption(current_image, skillName) {
        var $sel = current_image;
        var $skill = skillName;

        if ($skill == "Rapid sketches") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("Paper prototyping helps to brainstorm ideas, find best approaches quickly, and detect potential flaws in my solutions before they go to developing reducing the need for changes in further process. I try to generate, review and analyze as much approaches to the problem as possible in case not miss anything. My tools at this stage are paper and markers.");
                    $('.imgName').text("1. It’s about getting ideas out");
                    break;
                case 1:
                    $('.imgCaption').text("My goal for sketching is to visualize my ideas, determine right and inappropriate solutions as fast as possible, and share my thoughts with team if needed. It helps to quickly describe ideas to teammates without getting into details which unnecessary on specific stage. The purpose is to find best solutions to work further.");
                    $('.imgName').text("2. Sketches are for sharing");
                    break;
            }
        }
        else if ($skill == "Wireframes") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("I move to wireframing step when I have general thoughts and solutions regarding UX after sketching and research process. Putting those ideas down raises questions and leads to changes.");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("Wireframing helps me to keep design process iterative and consistent.");
                    $('.imgName').text("2");
                    break;
                case 2:
                    $('.imgCaption').text("I use deliverables in documents and share them with a team. It helps me involve everyone to process and gain feedback.");
                    $('.imgName').text("3");
                    break;
                case 3:
                    $('.imgCaption').text("Also I keep things very simple and limit the color in case not to be distracted with details and save time.");
                    $('.imgName').text("4");
                    break;
            }
        }
        else if ($skill == "Working Prototypes") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("");
                    $('.imgName').text("2");
                    break;
            }
        }
        else if ($skill == "Architecture") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("I believe that dealing with content structure and organization at first determine how to proceed with overall user experience, so this process require to think critical, creative and logical at the same time. Amount of time spend to this process depends on complicity of software, but it is fundamental part of user experience even in developing simple applications.");
                    $('.imgName').text("1");
                    break;
            }
        }
        else if ($skill == "User Cases") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("");
                    $('.imgName').text("2");
                    break;
            }
        }
        else if ($skill == "Documents") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("");
                    $('.imgName').text("2");
                    break;
            }
        }
        else if ($skill == "Psychology") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("");
                    $('.imgName').text("2");
                    break;
            }
        }
        else if ($skill == "Interface Design") {
            switch($sel) {
                case 0:
                    $('.imgCaption').text("");
                    $('.imgName').text("1");
                    break;
                case 1:
                    $('.imgCaption').text("");
                    $('.imgName').text("2");
                    break;
            }

        } else {};
    };

});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
