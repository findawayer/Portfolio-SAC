(function($, undefined) {

    /**
     * slick 플러그인을 적용
     * Bootstrap 내장 carousel은 스크린 너비에 맞춰 슬라이드 갯수 조절이 불가능하므로 비사용
     * API: http://kenwheeler.github.io/slick/
     */

    // 상단의 최근 공연/전시 일정 캐루셀
    activateSlick(
        $("#featuredCarousel"),
        $("#featuredNav"),
        {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000, // default: 3000
            speed: 400, // default: 300
            slidesToShow: 3,
            slidesToScroll: 3,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 767, // = Bootstrap `sm`
                    settings: {
                        slideToShow: 2,
                        slideToScroll: 2
                    }
                },
                {
                    breakpoint: 543, // = Bootstrap `xs`
                    settings: {
                        slideToShow: 1,
                        slideToScroll: 1,
                        autoplay: false
                    }
                }
            ]
        }
    );

    // 프로모션 섹션의 각종 이벤트 캐루셀
    activateSlick(
        $("#promotionsCarousel"),
        $("#promotionsNav"),
        {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000, // default: 3000
            speed: 400, // default: 300
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            pauseOnFocus: true
        }
    );

    /**
     * slick 플러그인을 활성화
     *
     * @param {$object}  $(캐루셀 컨테이너)
     * @param {$object}  $(캐루셀 내비게이션)
     * @paran {object}   .slick()에 패스시킬 세팅 오브젝트
     */
    function activateSlick($carousel, $navigation, config) {
        if (!$carousel || !$navigation) {
            throw new Error("Function actiaveSlickNav: required argument(s) is missing.");
            return;
        }

        // if 및 else if를 줄이기 위한 변수
        var slickActions  = {
            prev: "slickPrev",
            next: "slickNext",
            pause: "slickPause",
            play: "slickPlay"
        };

        // 캐루셀에 slick 적용
        $carousel.slick(config);

        // 내비게이션의 컨트롤 버튼들을 활성화
        $navigation.on("click", ".crsl-button", function(event) {
            event.preventDefault();

            var requested = $(this).data("action");
            $carousel.slick(slickActions[requested]);

            if (requested == "pause") {
                $navigation.removeClass("playing");
            } else if (requested === "play") {
                $navigation.addClass("playing");
            }
        });
    }

    // 모든 셀렉트 메뉴를 jQuery UI로 리포맷
    $("select").selectmenu();

    // 컨텐츠 내비게이션 메뉴: 마우스오버에서 드랍다운 메뉴 꺼냄
    $("#contentNav .dropdown").hover(function() {
        $(this)
            .children(".dropdown-menu")
            .stop(true, true) // [clearQueue], [completeAnimation]
            .delay(100)
            .fadeIn(300);
    }, function() {
        $(this)
            .children(".dropdown-menu")
            .stop(true, true)
            .delay(100)
            .fadeOut(300);
    });

})(jQuery);