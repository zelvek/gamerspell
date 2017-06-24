/**
 *   1- Main menu
 *   2- Video wrapper
 *   3- Accordion
 *   4- Tabs
 *   5- Progressbar
 *   6- Slider
 *   7- Masonry
 *   8- Carousel
 *   9- Back to top
 *   10- jQuery for css
 *   11- Search box
 *   12- Tweet
 *   13- Validate form
 *   14- Breadking
 *   15- Flickr
 *   16- Gallery widget
 *   17- Gmap
 *   18- Browser resize
 *-----------------------------------------------------------------
 **/
"use strict";
var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":"file:///E:/kopasoft/ducnm_svn/karo/HTML"
    }
};
var map;

jQuery(document).ready(function () {

    // 1. Main menu
    Modernizr.load([{
        load: ['js/superfish.js'],
        complete: function () {
            $('.kopa-menu.sf-menu').superfish({
                delay:500
                // cssArrows:  false
            });
        }
    }]);
    // 1.1 Mobile menu
    Modernizr.load([{
        load: ['js/navgoco.js'],
        complete: function () {
            $(".kopa-menu.mobile-menu").navgoco({accordion: true});

            $('.mobile-menu-icon').click(function(){
                $(".kopa-menu.mobile-menu").slideToggle( "slow" );
            });
        }
    }]);
    // 2. Video wrapper
    if (jQuery(".video-wrapper").length > 0) {
        if (jQuery(".video-wrapper").length > 0) {
            Modernizr.load([{
                load: 'js/fitvids.js',
                complete: function () {
                    jQuery(".video-wrapper").fitVids();
                }
            }]);
        };
    }

    // 3. Accordion
    if (jQuery('.kopa-accordion').length > 0) {
        Modernizr.load([{
            load: 'js/jquery-ui.js',
            complete: function () {
                jQuery(".kopa-accordion").accordion({
                    collapsible: true,
                    heightStyle: "content",
                    icons: false
                });

            }
        }]);
    }
    if (jQuery('.kp-toggle').length > 0) {
        // jQuery('.kp-toggle > h3').addClass('toggle-header');
        // jQuery('.kp-toggle > div').addClass('toggle-content');
        jQuery('.kp-toggle .toggle-header') .next() .hide();
        jQuery('.kp-toggle .toggle-header').click(function(){
            if (jQuery(this).next() .is(':hidden')) {
              jQuery(this).next().slideDown('slow');
              jQuery(this).addClass('toggle-header-active');
            }
            else {
              jQuery(this).next() .slideUp('slow');
              jQuery(this).removeClass('toggle-header-active');
            };
        });
    };
    // 4. Tabs
    if (jQuery('.kopa-tab-widget .kopa-tabs').length > 0) {
        Modernizr.load([{
            load: 'js/jquery-ui.js',
            complete: function () {
                jQuery(".kopa-tabs").tabs();
            }
        }]);
    }

    if (jQuery(".kopa-tabs-defaul").length > 0) {
        jQuery(".kopa-tabs-defaul").each(function(){
            var $this=jQuery(this)
            Modernizr.load([{
                load: 'js/jquery-ui.js',
                complete: function () {
                    $this.tabs();
                }
            }]);
        });
    };

    if (jQuery('.kopa-list-post-tabs-widget').length > 0) {
        Modernizr.load([{
            load: ['js/jquery-ui.js', 'js/masonry.js', 'js/imagesloaded.js'],
            complete: function () {
                var $container_ms = jQuery('.kopa-list-post-tabs-widget .masonry-content');
                $container_ms.imagesLoaded(function () {
                    $container_ms.masonry({
                        itemSelector: ".item-outer",
                        columnWidth: ".item-outer"
                    });
                });


                jQuery(".kopa-list-post-tabs-widget .kopa-tabs").tabs({
                    create: function (event, ui) {
                        jQuery(".kopa-list-post-tabs-widget .ui-tabs-panel").each(function (index) {
                            jQuery(this).find(".item-outer").each(function (index) {
                                jQuery(this).addClass('item' + index);
                            });

                        });

                        jQuery(".kopa-list-post-tabs-widget .kopa-tabs").find('.ui-tabs-nav .ui-tabs-anchor').click(function () {
                            $container_ms.masonry();
                        });
                    }
                });
            }
        }]);
    }
    // 5. Progressbar
    if (jQuery('.kopa-progressbar').length > 0) {
        Modernizr.load([{
            load: 'js/jquery-ui.js',
            complete: function () {

                jQuery(".kopa-progressbar").each(function () {
                    var val = jQuery(this).attr("data-val");
                    jQuery(this).progressbar({
                        "value": val * 1
                    });
                });

            }
        }]);
    };
    // 6. Slider
    if (jQuery('.kopa-slider').length > 0) {

        Modernizr.load([{
            load: 'js/jquery-ui.js',
            complete: function () {

                jQuery(".kopa-slider").slider({
                    value: 60,
                    orientation: "horizontal",
                    range: "min",
                    animate: true,
                    slide: function () {
                        var val_slider = jQuery(".kopa-slider").slider("value");
                        jQuery('.kopa-val').text(val_slider);
                        jQuery('.kopa-val').css('left', val_slider + '%');
                    }
                });

            }
        }]);
    };

    // 7. Masonry
    if (jQuery('.kopa-list-posts-widget.style-2').length > 0) {
        Modernizr.load([{
            load: ['js/masonry.js', 'js/imagesloaded.js'],
            complete: function () {
                var $container_ms = jQuery('.kopa-list-posts-widget .widget-content');
                $container_ms.imagesLoaded(function () {
                    $container_ms.masonry({
                        itemSelector: ".item-outer",
                        columnWidth: ".item-outer"
                    });
                });
            }
        }]);
    }

    if (jQuery('.kopa-list-posts-masonry-widget').length > 0) {
        Modernizr.load([{
            load: ['js/masonry.js', 'js/imagesloaded.js'],
            complete: function () {
                var $container_ms = jQuery('.kopa-list-posts-masonry-widget .widget-content');
                $container_ms.imagesLoaded(function () {
                    $container_ms.masonry({
                        itemSelector: ".item-outer",
                        columnWidth: ".item-outer"
                    });
                });
            }
        }]);
    }


    // 8. Carousel
    if (jQuery('.kopa-full-width-carousel-widget .owl-carousel').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-full-width-carousel-widget .owl-carousel').owlCarousel({
                    singleItem: true
                });
            }
        }]);
    }

    if (jQuery('.kopa-galler-post').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-galler-post').owlCarousel({
                    singleItem: true
                });
            }
        }]);
    }

    if (jQuery('.kopa-thumb-big-carousel-widget .owl-carousel').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-thumb-big-carousel-widget .owl-carousel').owlCarousel({
                    singleItem: true,
                    slideSpeed: 700,
                    navigation: true,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
            }
        }]);
    }

    if (jQuery('.kopa-list-posts-carousel-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-list-posts-carousel-widget .owl-carousel').owlCarousel({
                    pagination: false,
                    items: 5,
                    itemsDesktop: [1200, 4],
                    itemsDesktopSmall: [1023, 3],
                    itemsTablet: [767, 2],
                    itemsMobile: [480, 1],
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
            }
        }]);
    }

    if (jQuery('.kopa-list-posts-carousel-4-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-list-posts-carousel-4-widget .owl-carousel').owlCarousel({
                    items: 3,
                    itemsDesktop: [1180, 3],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [767, 2],
                    slideSpeed: 700
                });
            }
        }]);
    }

    if (jQuery('.kopa-list-posts-carousel-2-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-list-posts-carousel-2-widget .owl-carousel').owlCarousel({
                    pagination: false,
                    items: 3,
                    itemsDesktop: [1180, 3],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [767, 2],
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
            }
        }]);
    }
    if (jQuery('.kopa-list-posts-carousel-3-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-list-posts-carousel-3-widget .owl-carousel').owlCarousel({
                    pagination: false,
                    items: 3,
                    itemsDesktop: [1180, 3],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [767, 2],
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
            }
        }]);
    }


    if (jQuery('.kopa-sync-carousel-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                var sync1 = jQuery(".kopa-sync-carousel-widget .sync1");
                var sync2 = jQuery(".kopa-sync-carousel-widget .sync2");

                sync1.owlCarousel({
                    singleItem: true,
                    slideSpeed: 1000,
                    afterAction: syncPosition,
                    responsiveRefreshRate: 200
                });


                sync2.owlCarousel({
                    items: 3,
                    itemsDesktop: [1199, 3],
                    itemsDesktopSmall: [979, 3],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [639, 3],
                    itemsMobile: [599, 3],
                    pagination: false,
                    responsiveRefreshRate: 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("synced");
                    }
                });



                function syncPosition(el) {
                    var current = this.currentItem;
                    sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced")
                    if (sync2.data("owlCarousel") !== undefined) {
                        center(current)
                    }
                }

                sync2.on("click", ".owl-item", function (e) {
                    e.preventDefault();
                    var number = jQuery(this).data("owlItem");
                    sync1.trigger("owl.goTo", number);
                });

                function center(number) {
                    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                    var num = number;
                    var found = false;
                    for (var i in sync2visible) {
                        if (num === sync2visible[i]) {
                            var found = true;
                        }
                    }

                    if (found === false) {
                        if (num > sync2visible[sync2visible.length - 1]) {
                            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                        } else {
                            if (num - 1 === -1) {
                                num = 0;
                            }
                            sync2.trigger("owl.goTo", num);
                        }
                    } else if (num === sync2visible[sync2visible.length - 1]) {
                        sync2.trigger("owl.goTo", sync2visible[1])
                    } else if (num === sync2visible[0]) {
                        sync2.trigger("owl.goTo", num - 1)
                    }

                }
            }
        }]);
    }

    if (jQuery('.kopa-single-gallery-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                var sync1 = jQuery(".kopa-single-gallery-widget .sync1");
                var sync2 = jQuery(".kopa-single-gallery-widget .sync2");

                sync1.owlCarousel({
                    singleItem: true,
                    pagination: false,
                    navigation: true,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                    slideSpeed: 1000,
                    afterAction: syncPosition,
                    responsiveRefreshRate: 200
                });


                sync2.owlCarousel({
                    items: 4,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [979, 4],
                    itemsTablet: [768, 4],
                    itemsTabletSmall: [639, 4],
                    itemsMobile: [599, 4],
                    pagination: false,
                    responsiveRefreshRate: 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("synced");
                    }
                });



                function syncPosition(el) {
                    var current = this.currentItem;
                    sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced")
                    if (sync2.data("owlCarousel") !== undefined) {
                        center(current)
                    }
                }

                sync2.on("click", ".owl-item", function (e) {
                    e.preventDefault();
                    var number = jQuery(this).data("owlItem");
                    sync1.trigger("owl.goTo", number);
                });

                function center(number) {
                    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                    var num = number;
                    var found = false;
                    for (var i in sync2visible) {
                        if (num === sync2visible[i]) {
                            var found = true;
                        }
                    }

                    if (found === false) {
                        if (num > sync2visible[sync2visible.length - 1]) {
                            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                        } else {
                            if (num - 1 === -1) {
                                num = 0;
                            }
                            sync2.trigger("owl.goTo", num);
                        }
                    } else if (num === sync2visible[sync2visible.length - 1]) {
                        sync2.trigger("owl.goTo", sync2visible[1])
                    } else if (num === sync2visible[0]) {
                        sync2.trigger("owl.goTo", num - 1)
                    }

                }
            }
        }]);
    }
    if (jQuery('.kopa-list-item-carousel-widget').length > 0) {
        Modernizr.load([{
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.kopa-list-item-carousel-widget .owl-carousel').owlCarousel({
                    pagination: false,
                    items: 4,
                    itemsDesktop: [1180, 4],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [767, 2],
                    itemsMobile: [459, 1],
                    slideSpeed: 700,
                    navigation: true,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
            }
        }]);
    }

    if (jQuery('.kopa-vertical-carousel-widget').length > 0) {
        Modernizr.load([{
            load: 'js/bxslider.js',
            complete: function () {
                var bx_slider = jQuery('.kopa-vertical-carousel-widget .bx-slider').bxSlider({
                    mode: 'vertical',
                    minSlides: 3,
                    pager: false,
                    nextText: '',
                    prevText: ''
                });
            }
        }]);
    }



    // 9. Back to top
    jQuery(".back-to-top").hide();
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.back-to-top').fadeIn();
        } else {
            jQuery('.back-to-top').fadeOut();
        }
    });

    jQuery('.back-to-top').click(function (event) {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        event.preventDefault();
    })

    // 10. jQuery for css
    if (jQuery(".kopa-grid-posts-widget").length > 0) {
        jQuery(".kopa-grid-posts-widget .item").each(function (index) {
            jQuery(this).addClass('item' + index);
        });
    }

    if (jQuery(".kopa-list-item-carousel-widget").length > 0) {
        hover_effect();
    }


    if (jQuery(".kopa-media-widget").length > 0) {
        jQuery(".kopa-media-widget .item-post").each(function (index) {
            jQuery(this).addClass('item' + index);
        });
    }

    if (jQuery(".kopa-list-posts-masonry-widget").length > 0) {
        jQuery(".kopa-list-posts-masonry-widget .item-outer").each(function (index) {
            jQuery(this).addClass('item' + index);
        });
    }
    if (jQuery(".kopa-list-posts-2-widget").length > 0) {
        jQuery(".kopa-list-posts-2-widget .item").each(function (index) {
            jQuery(this).addClass('item' + index);
        });
        jQuery(".kopa-list-posts-2-widget").each(function (index) {
            jQuery(this).find(".item").each(function (index) {
                jQuery(this).addClass('item' + index);
            });
        });
    }
    if (jQuery(".kopa-list-post-small-thumb-widget").length > 0) {
        jQuery(".kopa-list-post-small-thumb-widget .widget-content > ul > li:even").addClass('even');
    }



    // 11. Search box
    if (jQuery('.kopa-head-line').length > 0) {
        var $search = jQuery('.kopa-search-box .search-form');
        $search.find('span').click(function () {
            $search.find("input[type='text']").stop(true).animate({
                padding: '6px 12px',
                width: '200px'
            }, 500);
            $search.stop(true).animate({
                width: '236px'
            }, 500);
            $search.find('span').css('display', 'none');
            $search.find('button').css('display', 'block');
        });
    }


    // 12. Tweet
    if (jQuery('.tweets').length > 0) {
        Modernizr.load([{
            load: ['js/tweetable.js', 'js/timeago.js'],
            complete: function () {
                jQuery('.tweets').each(function () {
                    jQuery(this).tweetable({
                        username: jQuery(this).find('.tweets').attr('data-user'),
                        time: true,
                        rotate: false,
                        speed: 400,
                        limit: 4,
                        replies: false,
                        position: 'append',
                        failed: kopa_variable.i18n.tweets.failed,
                        loading: kopa_variable.i18n.tweets.loading,
                        html5: true,
                        onComplete: function ($ul) {
                            jQuery('time').timeago();
                        }
                    });
                });
            }
        }]);
    }
    // 13. Validate form
    if (jQuery('.comment-form,.contact-form').length > 0) {
        Modernizr.load([{
            load: ['js/form.js', 'js/validate.js'],
            complete: function () {
                jQuery('.comment-form,.contact-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: kopa_variable.i18n.validate.name.REQUIRED,
                            minlength: jQuery.format(kopa_variable.i18n.validate.name.MINLENGTH)
                        },
                        email: {
                            required: kopa_variable.i18n.validate.email.REQUIRED,
                            email: kopa_variable.i18n.validate.email.EMAIL
                        },
                        message: {
                            required: kopa_variable.i18n.validate.message.REQUIRED,
                            minlength: jQuery.format(kopa_variable.i18n.validate.message.MINLENGTH)
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function (form) {
                        jQuery(".comment-form .input-submit,.contact-form.input-submit").attr("value", kopa_variable.i18n.validate.form.SENDING);
                        jQuery(form).ajaxSubmit({
                            success: function (responseText, statusText, xhr, $form) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery(".comment-form .input-submit,.contact-form.input-submit").attr("value", kopa_variable.i18n.validate.form.SUBMIT);
                            }
                        });
                        return false;
                    }
                });
            }
        }]);
    }

    // 14.Breadking
    if (jQuery('.ticker-1').length > 0) {
        Modernizr.load([{
            load: 'js/caroufredsel.js',
            complete: function () {
                var _scroll = {
                    delay: 1000,
                    easing: 'linear',
                    items: 1,
                    duration: 0.07,
                    timeoutDuration: 0,
                    pauseOnHover: 'immediate'
                };
                jQuery('.ticker-1').carouFredSel({
                    width: 1000,
                    align: false,
                    items: {
                        width: 'variable',
                        height: 35,
                        visible: 1
                    },
                    scroll: _scroll
                });
            }
        }]);
    }
    // 15. Flickr
    if (jQuery('.kopa-flickr-widget').length > 0) {

        Modernizr.load([{
            load: ['js/jflickrfeed.js', 'js/imgliquid.js'],
            complete: function () {
                jQuery('.kopa-flickr-widget ul').each(function () {
                    jQuery(this).jflickrfeed({
                        limit: 9,
                        qstrings: {
                            id: jQuery(this).find('.flickr-wrap').attr('data-user')
                        },
                        itemTemplate: '<li class="flickr-badge-image">' + '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid">' + '<img src="{{image_m}}" alt="{{title}}"  />' + '</a>' + '</li>'
                    }, function (data) {
                        jQuery('.kopa-flickr-widget .imgLiquid').imgLiquid();
                    });
                });
            }
        }]);
    }


    // 16. Gallery widget
    if (jQuery('.kopa-gallery-widget').length > 0) {
        Modernizr.load([{
            load: 'js/imgliquid.js',
            complete: function () {
                jQuery('.kopa-gallery-widget .imgLiquid').imgLiquid();
            }
        }]);
    }

    // 17. Gmap
    if (jQuery('.kopa-contact-widget').length > 0) {
        Modernizr.load([{
            load: 'js/gmaps.js',
            complete: function () {
                var map_id = '#' + jQuery('.map-wrap').attr('id');
                var lat = parseFloat(jQuery('.map-wrap').attr('data-latitude'));
                var lng = parseFloat(jQuery('.map-wrap').attr('data-longitude'));

                map = new GMaps({
                    el: map_id,
                    lat: lat,
                    lng: lng,
                    zoomControl: true,
                    zoomControlOpt: {
                        style: 'SMALL',
                        position: 'TOP_LEFT'
                    },
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false
                });
                var marker_info = {
                    lat: lat,
                    lng: lng
                };

                if ('' !== kopa_variable.contact.marker) {
                    marker_info.icon = kopa_variable.contact.marker;
                }

                if ('' !== kopa_variable.contact.address) {
                    marker_info.infoWindow = {
                        content: kopa_variable.contact.address
                    };
                }
                // gmap.addMarker(marker_info);
            }
        }]);
    };
    jQuery('.kopa-alert .close').click(function(){
        jQuery('.kopa-alert .close').parent().hide();
    });

});

// 18. Browser resize
Modernizr.load([{
    load: 'js/debouncedresize.js',
    complete: function () {
        jQuery(window).bind("debouncedresize", function () {
            hover_effect();
        });
    }
}]);


function hover_effect() {
    var window_width = jQuery(window).width();
    if (window_width > 1030) {
        jQuery('.kopa-list-item-carousel-widget .item-content').css('top', '307px');
        jQuery('.kopa-list-item-carousel-widget .item').hover(function () {
            jQuery(this).addClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: '0'
            }, 500);
        }, function () {
            jQuery(this).removeClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: '307px'
            }, 500);
        });
    } else if (window_width <= 1030 && window_width > 980) {
        jQuery('.kopa-list-item-carousel-widget .item-content').css('top', '250px');
        jQuery('.kopa-list-item-carousel-widget .item').hover(function () {
            jQuery(this).addClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: '0'
            }, 500);
        }, function () {
            jQuery(this).removeClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: '250px'
            }, 500);
        });
    } else if (window_width < 1023) {
        jQuery('.kopa-list-item-carousel-widget .item-content').css({
            top: 'auto',
            bottom: '0'
        });
        jQuery('.kopa-list-item-carousel-widget .item').hover(function () {
            jQuery(this).addClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: 'auto'
            }, 500);
        }, function () {
            jQuery(this).removeClass('focus');
            jQuery(this).find('.item-content').stop(true).animate({
                top: 'auto'
            }, 500);
        });
    }
}