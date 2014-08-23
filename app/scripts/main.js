$(document).ready(function() {
  $(".login").on('click', '.login_button', function () {
    $(header).append('.username');
    $(this).addClass('hide');
  });


});
