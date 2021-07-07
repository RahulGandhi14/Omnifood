$(document).ready(function () {
    /* For the sticky navigation */
    $('#features').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky')
            } else {
                $('nav').removeClass('sticky')
            }
        },
        {
            offset: '60px',
        }
    )

    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate(
            { scrollTop: $('.section-plans').offset().top },
            1000
        )
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate(
            { scrollTop: $('.js--section-features').offset().top },
            500
        )
    })

    /* Animations on scroll */
    $('.js-wp-1').waypoint(
        function (direction) {
            $('.js-wp-1').addClass('animate__animated animate__fadeIn')
        },
        {
            offset: '50%',
        }
    )

    $('.app-screen').waypoint(
        function (direction) {
            $('.app-screen').addClass('animate__animated animate__fadeInUp')
        },
        {
            offset: '50%',
        }
    )

    $('.premiumPlan').waypoint(
        function (direction) {
            $('.premiumPlan').addClass('animate__animated animate__pulse')
        },
        {
            offset: '60%',
        }
    )

    $('.section-cities').waypoint(
        function (direction) {
            $('.section-cities').addClass(
                'animate__animated animate__slideInUp'
            )
        },
        {
            offset: '60%',
        }
    )

    $('.testimonials').waypoint(
        function (direction) {
            $('.testimonials').addClass('animate__animated animate__fadeInDown')
        },
        {
            offset: '60%',
        }
    )

    /* Mobile Navigation */
    $('.mobile-nav-icon').click(function () {
        let nav = $('.main-nav')
        nav.slideToggle(200)

        if ($('.menuIcon').hasClass('notVisible')) {
            $('.menuIcon').removeClass('notVisible')
            $('.closeIcon').addClass('notVisible')
        } else {
            $('.menuIcon').addClass('notVisible')
            $('.closeIcon').removeClass('notVisible')
        }
    })
})
