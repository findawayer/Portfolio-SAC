(function($) {

    /**
     * 슬라이더를 활성화
     * 
     * jQuery plugin responsiveCarousel 사용
     * Bootstrap 내장 carousel은 스크린 크기에 따라
     * 아이템 갯수 조절이 불가능하므로 사용하지 않음
     *
     * @API: http://basilio.github.io/responsiveCarousel/
     */
    $("#featuredSlider").respCarousel({
        autoRotate: 4000,
        itemMinWidth: 300,
        itemMargin: 10,
        speed: 500,
        visible: 3
    });

    $("#promotions").respCarousel({
        autoRotate: 4000,
        itemMinWidth: 340,
        itemMargin: 15,
        speed: 500,
        visible: 1
    });

    $("select").selectmenu();

    /* 컨텐츠 내비게이션 메뉴: 마우스오버에서 드랍다운 메뉴 꺼냄 */
    $("#contentNav .dropdown").hover(function() {
        $(this)
            .children(".dropdown-menu")
                .stop(true, true)
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