$(document).ready(function() {
    
    $('img.register').mouseover(function() {
        jQuery('img.register').stop().animate({ height: '55%', left: '19%' }, 50);
    });
    $('img.register').mouseout(function() {
        jQuery('img.register').stop().animate({ height: '50%', left: '20%' }, 50);
    });
    
    //width of browser in inches
    var dpi_x = document.getElementById('dpi').offsetWidth;
    var widthI = $(this).width() / dpi_x;

    var widthP = $(window).width();
    $(window).resize(function(){
       resize();
    });
    resize();
    
    function resize() {
        if($(this).width() != widthI) {
           widthI = $(this).width() / dpi_x;
        }
        // MOBILE
       if(widthI < 5) {
           window.location.href = "https://mobile-awana.bitballoon.com";
       }
        // DESKTOP
       if(widthI > 5) {
           
       }
    }
    
    var isTop = "true";
    $(window).scroll(function() {
        var offset = $("header").offset().top;
        var scrollTop = $(window).scrollTop();
        if(scrollTop > offset && isTop=="true") {
            $("header.fixed").css("visibility","visible");
            isTop = "false";
        }
        if(scrollTop < offset && isTop=="false") {
            $("header.fixed").css("visibility","hidden");
            isTop = "true";
        }
        //alert(scrollTop + "---" + offset + "---" + isTop);
    });
    
    // Add smooth scrolling to navigation links
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 600, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    }
    });
    
    /*
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('img.register').stop().animate({ left: '10%' });
        } else {
            jQuery('img.register').stop().animate({ padding: '30vh 0 0 0' });
        }
    });
    */
                                 
});