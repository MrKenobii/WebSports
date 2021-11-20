$(function () {
  $("#myCarousel").carousel({
    interval: 20000,
  });
  $("#loginButton").on("click", function () {
    $("#loginModal").modal("show");
  });
});
