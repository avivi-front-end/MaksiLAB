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

    $('.js-question-submit').click(function () {
        $('.js-question-form').submit();
    });

    $('.js-question-form').validate({
        rules: {
            name: {
                required: true
            }
        }
    });

    $(window).load(function () {

        if ($(window).outerWidth() > 768) {
            $('.trainings__item').matchHeight({
                byRow: false,
                property: 'height'
            });
        } else {
            return false
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
        } else {
            console.log("index dec no");
        }


        if ($('.js-about-dec').length > 0) {
            $(window).scroll(function(){
                var SKOLKO2 = $(window).scrollTop();
                var posItion2 =  parseInt(SKOLKO2 * 0.5);
                $('.js-about-dec').css('transform','translateY('+posItion2+'px)');
            });
        } else {
            console.log("about dec no");
        }

        if ($('.js-guarantee-dec').length > 0) {
            $(window).scroll(function(){
                var SKOLKO3 = $(window).scrollTop() - 1400;
                var posItion3 =  parseInt(SKOLKO3 * 0.5);
                $('.js-guarantee-dec').css('transform','translateY('+posItion3+'px)');
            });
        } else {
            console.log("about guarantee dec no");
        }

        if ($('.trainings__dec-icon').length > 0) {
            $(window).scroll(function(){
                var SKOLKO4 = $(window).scrollTop();
                var posItion4 =  parseInt(SKOLKO4 * 0.5);
                $('.trainings__dec-icon').css('transform','translateY('+posItion4+'px)');
            });
        } else {
            console.log("trainings dec no");
        }

    });

    new WOW().init();

});