var database = "http://tiy-fee-rest.herokuapp.com/collections/brendansTeam"

$(document).ready(function() {
  // $(".login").on('click', '.login_button', function (event) {
  //   event.preventDefault();
  //   $('.profileInfo').children('.info').children('.username').append(user);
  //   $('.login').hide();
  //   $('section').removeClass('hide');
  // });

  $('.mainContainer').on('submit', '.newBudget', function(event) {

      event.preventDefault();

      var newbudget = {

        name:$(this).find('.budgetItemName input').val(),
        amount:$(this).find('.budgetItemAmount input').val(),
        category:$(this).find('.budgetItemCategory option').val(),
        expense:[]

      };

  });

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
