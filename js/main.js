// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");


// AOS Js (Reveal Animation)
AOS.init();




$(".casp-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
  // variableWidth: true
          }
      }
  ]
})



// -----====== Counter Player =======-----
var counter = $(".counter").offset().top - 300;
$(window).scroll(function () {
  var scrTop = $(window).scrollTop();
  if (scrTop > counter) {
    $(".num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});