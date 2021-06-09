$(function () {
  // visual 변수
  var num_banner = 0;
  // new & best 변수
  var num_new_best = 0;
  // review 변수
  var num_review = 0;

  // dragging start point
  var startX = 0;
  // dragging stop point
  var stopX = 0;
  // dragging distance
  var moveX = 0;
  // window width for resizing :
  var winWidth = $(window).width();

  // ----- hamBtn
  $(".btn_hamburger_m").click(function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $(".user_gnb_m").toggleClass("active");
    $(".bg_m").fadeToggle(300);
    if ($(".btn_hamburger_m").has("active")) {
      $(".depth_01>li").removeClass("active");
    }
  });
  $(".bg_m").click(function () {
    $("#nav").removeClass("active");
    $(".user_gnb_m").removeClass("active");
    $(".bg_m").fadeOut(300);
    $(".btn_hamburger_m").removeClass("active");
  });

  // ----- sub_menu
  $(".depth_01>li>a").click(function () {
    $(this).parent("li").toggleClass("active");
    $(this).parent("li").siblings("li").removeClass("active");
  });

  // ----- visual
  function banner() {
    $(".circle>li")
      .eq(num_banner)
      .addClass("active")
      .siblings("li")
      .removeClass("active");
    $(".banner_main>li")
      .eq(num_banner)
      .stop()
      .fadeIn(400)
      .siblings("li")
      .stop()
      .fadeOut(400);
  }
  $(".circle>li").click(function () {
    num_banner = $(this).index();
    banner();
  });
  $(".visual>.ctrl>.prev").click(function () {
    if (num_banner == 0) {
      num_banner = 2;
    } else {
      num_banner--;
    }
    banner();
  });
  $(".visual>.ctrl>.next").click(function () {
    if (num_banner > 1) {
      num_banner = 0;
    } else {
      num_banner++;
    }
    banner();
  });
  $(".banner_main").draggable({
    axis: "x",
    containment: ".banner_main",
    scroll: false,
    start: function (e) {
      startX = e.clientX;
    },
    stop: function (e) {
      stopX = e.clientX;
      moveX = startX - stopX;

      if (moveX > 0) {
        $(".visual>.ctrl>.next").trigger("click");
      } else {
        $(".visual>.ctrl>.prev").trigger("click");
      }
    },
  });

  // ----- new & best
  $(".new_best>.ctrl>.prev").css("display", "none");
  $(".new_best>.ctrl>.next").click(function () {
    if (num_new_best < 2) {
      num_new_best++;
      $(".new_best>.ctrl>.prev").stop().fadeIn(200);
    }
    if (num_new_best == 2) {
      $(this).stop().fadeOut(200);
    }

    $(".list_new_wrap")
      .stop()
      .animate(
        {
          "margin-left": -306.6666667 * num_new_best + "px",
        },
        400
      );
    console.log(num_new_best);
  });
  $(".new_best>.ctrl>.prev").click(function () {
    if (num_new_best > 0) {
      num_new_best--;
      $(".new_best>.ctrl>.next").stop().fadeIn(200);
    }
    if (num_new_best == 0) {
      $(this).stop().fadeOut(200);
    }

    $(".list_new_wrap")
      .stop()
      .animate(
        {
          "margin-left": -306.6666667 * num_new_best + "px",
        },
        400
      );
  });

  // ----- category
  $(".list_category>li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(this).children(".list_sub").css("display", "block");
    $(this).siblings("li").children(".list_sub").css("display", "none");
  });

  // ----- review
  $(".review>.ctrl>.prev").css("display", "none");
  $(".review>.ctrl>.next").click(function () {
    $(".list_review")
      .stop()
      .animate(
        {
          "margin-left": -96 + "px",
        },
        400
      );
    $(this).fadeOut(200);
    $(".review>.ctrl>.prev").fadeIn(200);
  });
  $(".review>.ctrl>.prev").click(function () {
    $(".list_review")
      .stop()
      .animate(
        {
          "margin-left": 0 + "px",
        },
        400
      );
    $(this).fadeOut(200);
    $(".review>.ctrl>.next").fadeIn(200);
  });

  // device-width로 접속시 초기화 실행 (F5 역할)
  init();

  $(window).resize(function () {
    winWidth = $(this).width();

    // resize 시 초기화 실행
    init();
    $("#nav").removeClass("active");
    $(".user_gnb_m").removeClass("active");
    $(".btn_hamburger_m").removeClass("active");
    $(".depth_01>li").removeClass("active");
    // mobile :
    if (winWidth < 767) {
      $(".list_review > li").children(".ratings_Wrap").css("display", "block");
      $(".list_review > li").children(".details_Wrap").css("display", "none");
    }
    // PC :
    else {
      $(".list_review > li").children(".ratings_Wrap").css("display", "none");
      $(".list_review > li").children(".details_Wrap").css("display", "none");
    }
  });

  function init() {
    // 초기화해야 할 목록 :
    $(".new_best>.ctrl>.prev").css("display", "none");
    $(".list_new_wrap").css("margin-left", 0);
    $(".list_review").css("margin-left", 0);
    $(".review>.ctrl>.prev").css("display", "none");
    $(".review>.ctrl>.next").css("display", "block");
    $(".bg_m").css("display", "none");

    // review :
    // mobile
    if (winWidth < 767) {
      $(".list_review").draggable({
        disabled: false,
        axis: "x",
        start: function (e) {
          startX = e.clientX;
        },

        stop: function (e) {
          stopX = e.clientX;
          moveX = startX - stopX;
          var x = parseInt($(".list_review").css("left"));
          var listW = winWidth - 900;

          console.log(moveX, listW, x);

          if (x < listW) {
            $(".list_review")
              .stop()
              .animate(
                {
                  left: listW - 24,
                },
                500
              );
          }
          if (x > 0) {
            $(".list_review").stop().animate(
              {
                left: 0,
              },
              500
            );
          }
        },
      });

      $(".list_review > li").children(".ratings_Wrap").css("display", "block");
      $(".list_review>li").off("mouseover");
    }
    // PC
    else {
      $(".list_review").css("left", 0);
      $(".list_review").draggable({
        disabled: true,
      });

      $(".list_review > li").children(".details_Wrap").css("display", "none");
      $(".list_review > li").children(".ratings_Wrap").css("display", "none");
      $(".list_review > li").on("mouseover", function (e) {
        e.stopPropagation();
        $(this).children(".ratings_Wrap").css("display", "block");
        $(this).children(".details_Wrap").css("display", "block");
        $(this).siblings().children(".ratings_Wrap").css("display", "none");
        $(this).siblings().children(".details_Wrap").css("display", "none");
      });
      $(".list_review > li").on("mouseout", function (e) {
        $(this).children(".ratings_Wrap").css("display", "none");
        $(this).children(".details_Wrap").css("display", "none");
      });
    }
  }
});
