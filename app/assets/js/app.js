var header = $('nav'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

ScrollReveal({
    delay: 0,
    distance: '100px',
    duration: 600,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset(el) {},
    afterReveal: function afterReveal(el) {},
    beforeReset: function beforeReset(el) {},
    beforeReveal: function beforeReveal(el) {}
});

ScrollReveal().reveal("[data-reveal-title]", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-section-head] > *", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-section]", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-grid] > *", { viewFactor: .2, interval: 200 }); 
ScrollReveal().reveal(".p-home .tabs", { viewFactor: .2 });

$(window).scroll(function() {           
    var st = $(this).scrollTop(); 
    $(".demands span").css({ "transform" : "translate( -" + st /120 + "%" });
});


function newFunction() {
    const q = selector => document.querySelector(selector),
        on = 'addEventListener';

    const fullscreen = () => {
        var elem = q('.lazy');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };

    q('#btnFull')[on]('click', fullscreen);
    q('#btnPlay')[on]('click', () => myPlayer.play());
    q('#btnPause')[on]('click', () => myPlayer.pause());
}

DG.then(function () {
    map = DG.map('map', {
        center: [43.113244, 131.88100],
        zoom: 17,
        touchZoom: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        geoclicker: false,
        zoomControl: false,
        boxZoom: false,
        fullscreenControl: false,
    });

myIcon = DG.icon({
    iconUrl: '/assets/icons/marker.svg',
        iconSize: [100]
    });

    DG.marker([43.113244, 131.881002], {
        icon: myIcon
    }).addTo(map);
});