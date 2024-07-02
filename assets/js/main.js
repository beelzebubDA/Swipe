$(document).ready(function(){


    //tab effects

    if (window.matchMedia("(max-width: 1319px)")) {
        let pasSwiperLmsBtns = $(".posSwipeLms_L-btn");
        let pasSwiperLmsItems = $(".posSwipeLms_R-item");
        pasSwiperLmsBtns.each(function (btn) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $(this).addClass("active");
                let thisAttr = $(this).attr("data-name");
                pasSwiperLmsBtns.not($(this)).removeClass("active");
                pasSwiperLmsBtns.not($(this)).removeClass("frstLink");

                pasSwiperLmsItems.each(function (item) {
                    if ($(this).attr("data-name") == thisAttr) {
                        $(this).addClass("active");
                        $(this).removeClass("disnone");
                        pasSwiperLmsItems.not($(this)).removeClass("active");
                        pasSwiperLmsItems.not($(this)).addClass("disnone");
                    }
                });
            });
        });
    }

    // mobile

    let headerMenu = $(".header_menu");
    let headerNav = $(".header_R-nav");
    let header_menuCloseBtn = $(".header_mob-closeLink");
    let body = $("body");

    headerMenu.on("click", function (e) {
        e.preventDefault();
        headerNav.addClass("active");
        body.addClass("active");
    });
    header_menuCloseBtn.on("click", function (e) {
        e.preventDefault();
        headerNav.removeClass("active");
        body.removeClass("active");
    });

    
    // partners swiper

    let swiper = new Swiper(".partners_swiper", {
        slidesPerView: 1.1,
        spaceBetween: 24,
        centeredSlides: true,
        // loop: true,
        navigation: {
            nextEl: ".partners_next",
            prevEl: ".partners_prev",
        },
        pagination: {
            el: ".partners_pagination",
        },
    });

    // reviews swiper

    let Revswiper = new Swiper(".reviews_swiper", {
        slidesPerView: 1.6,
        spaceBetween: 20,
        pagination: {
            el: ".reviewsS_pagination",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.05,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            1320: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
        },
        // loop: true,
    });

    let reviewsSwiper = $(".reviewsS-item__btn");
    let reviewsModal = $(".reviews_modal_block");
    let revClose = $(".modal_closeRev");
    reviewsSwiper.each(function (btn){
        $(this).on("click", function(e){
            e.preventDefault();
            let rewName = $(this).parent().parent().find(".reviewsS-item__name").text();
            let rewJob = $(this).parent().parent().find(".reviewsS-item__job").text();
            let rewText = $(this).parent().parent().find(".reviewsS-item__text").text();
            let rewImg = $(this).parent().parent().find(".reviewsS-item__img img").attr("src");
            console.log(rewImg);
            body.addClass("active");
            reviewsModal.addClass("active");
            reviewsModal.find(".reviews_modal-picture img").attr("src", rewImg);
            reviewsModal.find(".modal-title").text(rewName);
            reviewsModal.find(".modal-subtitle").text(rewJob);
            reviewsModal.find(".modal-text").text(rewText);
        });
    });
    revClose.on("click", function (e) {
        reviewsModal.removeClass("active");
        body.removeClass("active");
    });

    // modal
    let modalOpenBtn = $(".modalOpenBtn");
    let modalBlock = $(".modal_block");
    let modalCloseBtn = $(".modal_close");
    modalOpenBtn.each(function (btn) {
        $(this).on('click', function(e) {
            e.preventDefault();
            modalBlock.addClass("fixed");
        });
    });
    modalCloseBtn.on("click", function (e) {
        e.preventDefault();
        modalBlock.removeClass("fixed");
    });

    // blog search links

    let blogLinks = $(".allArticles_link");
    blogLinks.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
        });
    });

    // about us swiper

    let aboutUsSwiper = new Swiper(".aboutUsSwiper_block", {
        slidesPerView: 6,
        spaceBetween: 24,
        slideToClickedSlide: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: ".aboutUsSwiper_next",
            prevEl: ".aboutUsSwiper_prev",
        },
        pagination: {
            el: ".aboutUsSwiper_pagination",
        },
        breakpoints: {
            375: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1320: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
        },
    });

    // question accordion

    let accBtn = $(".questions_title");
    accBtn.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).parent().toggleClass("active");
            $(this).parent().find('.questions_text').slideToggle();
        });
    });

    // catalog search items

    let searchBtnItems = $(".CourseLib_T-link");
    searchBtnItems.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            // accBtn.not($(this)).parent().removeClass("active");
        });
    });

    // nice select

    $('select').niceSelect();
    
    ScrollTrigger.matchMedia({

        "(min-width: 1319px)": function() {

            // Animating Hero Image
    TweenLite.set(".heroImg01", {
        perspective: 500
    });

    TweenLite.set(".heroImg01 img", {
        transformStyle: "preserve-3d",
        
    });

    TweenLite.set(".heroImg02", {
        perspective: 500
    });

    TweenLite.set(".heroImg02 img", {
        transformStyle: "preserve-3d",
        opacity: 0
    });

    var tl = new gsap.timeline({
        delay: 1,
        repeat: -1,
        yoyo:true
    })

    var tl2 = new gsap.timeline({
        delay: 1,
        repeat: -1,
        yoyo:true
    })
    

    tl.to(".heroImg01 img", 2, {
        // scale: .5,
        ease: Power4.easeInOut,
        rotationY: '+=360'
    }).to(".heroImg01 img", 2, {
        // scale: .5,
        ease: Power4.easeInOut,
        rotationY: 0,
    })

    tl2
    .to(".heroImg02 img", 2, {
        opacity: 1,
        scale: 1,
        ease: Power4.easeInOut,
        rotationY: 180,
    }).to(".heroImg02 img", 2, {
        opacity: 0,
        scale: 0.8,
        ease: Power4.easeInOut,
        rotationY: 0,
    })

    // Animating About Image

    if($('.aboutUsHeroImgPt04') && $('.aboutUsHeroImgPt03')){
        TweenLite.set(".aboutUsHeroImgPt03", {
            perspective: 500
        });
    
        TweenLite.set(".aboutUsHeroImgPt03 img", {
            transformStyle: "preserve-3d",
        });
    
        TweenLite.set(".aboutUsHeroImgPt04", {
            perspective: 500
        });
    
        TweenLite.set(".aboutUsHeroImgPt04 img", {
            transformStyle: "preserve-3d",
            opacity: 0
        });
    
        var tl = new gsap.timeline({
            delay: 1,
            repeat: -1,
            yoyo:true
        })
    
        var tl2 = new gsap.timeline({
            delay: 1,
            repeat: -1,
            yoyo:true
        })
        
    
        tl.to(".aboutUsHeroImgPt03 img", 2, {
            // scale: .5,
            ease: Power4.easeInOut,
            rotationY: '+=180'
        }).to(".aboutUsHeroImgPt03 img", 2, {
            // scale: .5,
            ease: Power4.easeInOut,
            rotationY: 0,
        })
    
        tl2
        .to(".aboutUsHeroImgPt04 img", 2, {
            opacity: 1,
            scale: 1,
            ease: Power4.easeInOut,
            rotationY: 180,
        }).to(".aboutUsHeroImgPt04 img", 2, {
            opacity: 0,
            scale: 0.8,
            ease: Power4.easeInOut,
            rotationY: 0,
        })
    }
    


    // Index Cards animation

    var rotation = -4;
    var els = $('.IndSol_item').get().reverse();
    var trigger = document.querySelector('.IndSol_items')
 

    var timeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: 'power4.inOut'
        },
        scrollTrigger: {
            pin: true,
            trigger: trigger,
            scrub: 0.6,
            start: 'top top',
            end: "+=".concat(els.length * (500 / 1.5)),
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });

    timeline.set(els, {
        rotate: function rotate(i) {
            return i * rotation;
        },
        transformOrigin: 'center'
    });
    timeline.to(els.slice(0, -1), {
        y: function y() {
        return -window.innerHeight - trigger.offsetHeight / 2;
        },
        rotate: -90,
        stagger: 0.5
    });
    


    // Posibilities card overlay animation
    const posibilities = gsap.utils.toArray(".posSwipeLms_R-item");
    const spacer = 40;
    const minScale = 1;
    const scrollYPositions = [];
    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.05 });
    
    posibilities.forEach((item, index) => {

        scrollYPositions.push($(item).offset().top);

        const scaleVal = "-=".concat(1 - 1184 / 1272);
        
        const tween = gsap.to(item, {
            scrollTrigger: {
                reversed: true,
                trigger: item,
                start: `top+=100 top+=100`,
                scrub: true,
                // markers: true,
                invalidateOnRefresh: true,
                onEnter: function(){
                    $('.posSwipeLms_L-btn').removeClass('active');
                    $($('.posSwipeLms_L-btn')[index]).addClass('active');
                },
                onEnterBack: function(){
                    $('.posSwipeLms_L-btn').removeClass('active');
                    $($('.posSwipeLms_L-btn')[index]).addClass('active');
                },
            },
            ease: "ease",
            scale: scaleVal
        });

        ScrollTrigger.create({
            trigger: item,
            reversed: true,
            start: `top-=${index * spacer} top`,
            endTrigger: '.posSwipeLms_R',
            end: `bottom top+=${200 + (posibilities.length * spacer)}`,
            pin: true,
            pinSpacing: false,
            // markers: true,
            id: 'pin',
            invalidateOnRefresh: true,
            
            
        });
    });

    if(document.querySelector('.posSwipeLms_L_links')){
        ScrollTrigger.create({
          trigger: '.posSwipeLms_L',
          // animation: gsap.fromTo(swiperWrapper, {yPercent: 0 },{yPercent: 110}),
          pin: true,
          start: 'top-=50 top+=100',
          end: 'bottom+=500 bottom',
          scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
        //   markers: true,
        })
    }

      $('.posSwipeLms_L-btn').on('click',function(e){
        e.preventDefault();
        let positionNumber = $(this).data('position')

        gsap.to(window,{
            duration: 1.5,
            scrollTo: scrollYPositions[positionNumber] + 5,
            ease: "Power1.easeInOut"
        })
      })

        }

    });
})