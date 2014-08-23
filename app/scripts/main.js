var database = "http://tiy-fee-rest.herokuapp.com/collections/brendansTeam"

$(document).ready(function() {
  // $(".login").on('click', '.login_button', function (event) {
  //   event.preventDefault();
  //   var user = $('.login_username').val();
  //   console.log(user);
  //   $('.profileInfo').children('.info').children('.username').append(user);
  //   $('.login').hide();
  //   $('section').removeClass('hide');

    // $.ajax({
    //
    //   url:database,
    //   type:"GET",
    //   success:function(response) {
    //
    //     window.data = response;
    //     console.log(data);
    //
    //     render(timelineTmpl, data, $('.mainContainer'));
    //
    //   }
    //
    // });
  //});

  $('.inner-wrap').on('click', 'a', function(event) {

    event.preventDefault();

    $.ajax({

      url:database,
      type:"GET",
      success:function(response) {

        window.data = response;
        console.log(data);

        render(budgetTmpl, data, $('.budgetDisplay'));

      }

    });

  });
});
