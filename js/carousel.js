$(document).ready(function () {
  // OWL CAROUSEL

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 900,
    autoplayHoverPause: true,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
