'use strict';
if (!window.console) window.console = {};
if (!window.console.memory) window.console.memory = function () {
};
if (!window.console.debug) window.console.debug = function () {
};
if (!window.console.error) window.console.error = function () {
};
if (!window.console.info) window.console.info = function () {
};
if (!window.console.log) window.console.log = function () {
};

// sticky footer
//-----------------------------------------------------------------------------
if (!Modernizr.flexbox) {
    (function () {
        var
            $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            noFlexboxStickyFooter = function () {
                $pageBody.height('auto');
                if ($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
                } else {
                    $pageWrapper.height('auto');
                }
            };
        $(window).on('load resize', noFlexboxStickyFooter);
    })();
}
if (ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
    (function () {
        var
            $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            ieFlexboxFix = function () {
                if ($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageWrapper.height($(window).height());
                    $pageBody.removeClass('flex-none');
                } else {
                    $pageWrapper.height('auto');
                }
            };
        ieFlexboxFix();
        $(window).on('load resize', ieFlexboxFix);
        svg4everybody();
    })();
}

$(function () {

    $('.js-show-pop').click(function () {
        var popup = '#popup-' + $(this).data('popup');
        $(popup).show();
        $('.popup').show();
        $('.overlay').show();
    });

    $('.overlay, .js-close').click(function () {
        $('.popup').hide();
        $('.popup>div').hide();
        $('.overlay').hide();
        $('.menu').show().css('transform','translateX(101%)');
    });

    $('.js-question-submit').click(function (e) {
        e.preventDefault();
        $('.js-question-form').submit();
    });

    $('.js-question-submit-pop').click(function (e) {
        e.preventDefault();
        $('.js-question-form-pop').submit();
    });

    $(".js-question-form").submit(function(e) {
        e.preventDefault();
        }).validate({
        rules: {
            name: {
                required: true
            }
        },
        submitHandler: function(form) {
            $('.popup').show();
            $('.overlay').show();
            $('#popup-thx').show();
            setTimeout(function () {
                $('.popup__thx').hide();
                $('.overlay').hide();
                $('.popup').hide();
            }, 4000);
        }
    });

    $(".js-question-form-pop").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            name_pop: {
                required: true
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            $('.js-popup-main').hide();
            $('.js-popup-thx').show();
            setTimeout(function () {
                $('.popup__thx').hide();
                $('.overlay').hide();
                $('.popup').hide();
            }, 4000);
        }
    });

    $(document).ready(function() {
        $("a.scrollto").click(function () {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });

        $('.images__notebook').css('transform','translateY(0)');

        setTimeout(function () {
            $('.images__keyboard, .images__mouse').css('transform','translateY(0)');
        }, 1500);

        setTimeout(function () {
            $('.images__coffee').css('transform','translateY(0) rotate(0)');
        }, 2500);
        setTimeout(function () {
            $('.images__note, .images__pen').css('transform','translateY(0)');
        }, 3500);
        setTimeout(function () {
            $('.index__ico-1, .index__ico-8, .index__ico-6').css('transform','scale(1)');
        }, 4300);
        setTimeout(function () {
            $('.index__ico-2, .index__ico-4, .index__ico-7, .index__ico-10').css('transform','scale(1)');
        }, 4500);
        setTimeout(function () {
            $('.index__ico-3, .index__ico-5, .index__ico-9').css('transform','scale(1)');
        }, 4700);

        if ($('.outsource__dec-icon').length > 0) {
            $(window).scroll(function(){
                var SKOLKO = $(window).scrollTop() - 1200 ;
                var posItion =  parseInt(SKOLKO * 0.5);
                $('.outsource__dec-icon').css('transform','translateY('+posItion+'px)');
            });
        }

        if ($('.js-about-dec').length > 0) {
            $(window).scroll(function(){
                var SKOLKO2 = $(window).scrollTop();
                var posItion2 =  parseInt(SKOLKO2 * 0.5);
                $('.js-about-dec').css('transform','translateY('+posItion2+'px)');
            });
        }

        if ($('.js-guarantee-dec').length > 0) {
            $(window).scroll(function(){
                var SKOLKO3 = $(window).scrollTop() - 1400;
                var posItion3 =  parseInt(SKOLKO3 * 0.5);
                $('.js-guarantee-dec').css('transform','translateY('+posItion3+'px)');
            });
        }

        if ($('.trainings__dec-icon').length > 0) {
            $(window).scroll(function(){
                var SKOLKO4 = $(window).scrollTop();
                var posItion4 =  parseInt(SKOLKO4 * 0.5);
                $('.trainings__dec-icon').css('transform','translateY('+posItion4+'px)');
            });
        }

        $('.js-menu').click(function () {
           $('.menu').css('transform','translateX(0)');
           $('.overlay').show();
        });

    });

    $(window).load(function () {

        $('.menu').css('top','0');

        if ($(window).outerWidth() > 768) {
            $('.trainings__item').matchHeight({
                byRow: false,
                property: 'height'
            });
        } else {

        }



    });

    if ($(window).outerWidth() < 1030) {
        $('.outsource__img__wrap').removeClass('shake wow')
    }

    new WOW().init();

});