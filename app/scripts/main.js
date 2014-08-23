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

  $('.addBudget').on('click', function(event) {

    event.preventDefault();
    $('.mainContainer').html(

      "<form class=\"newBudget large-4 medium-6 small-12\">"
        + "<div class=\"budgetItemName\">"
          + "<h2>Budget Name:</h2>"
          + "<input type=\"text\" placeholder=\"Enter Budget Name\" required>"
        + "</div>"
        + "<div class=\"budgetItemAmount\">"
          + "<h2>Budget Amount:</h2>"
          + "$<input type=\"number\" placeholder=\"Enter Budget Amount\" required>"
        + "</div>"
        + "<div class=\"budgetItemCategory\">"
          + "<h2>Select a category:</h2>"
          + "<select>"
            + "<option value=\"work\">Work</option>"
            + "<option value=\"personal\">Personal</option>"
          + "</select>"
        + "</div>"
        + "<input class=\"budgetSubmit\" type=\"submit\">"
      + "</form>"

    );

  });

  $('.addExpense').on('click', function(event) {

    event.preventDefault();
    $('.mainContainer').html(

      "<form class=\"newExpenseItem large-4 medium-6 small-12\">"
        + "<div class=\"expenseItemName\">"
          + "<h2>Name:</h2>"
          + "<input type=\"text\" placeholder=\"Enter Expense Name\" required>"
        + "</div>"
        + "<div class=\"expenseItemAmount\">"
          + "<h2>Charge:</h2>"
          + "$<input type=\"number\" placeholder=\"Enter Expense Amount\" required>"
        + "</div>"
        + "<div class=\"expenseItemDate\">"
          + "<h2>Date:</h2>"
          + "<input type=\"date\" placeholder=\"Enter Expense Date\">"
        + "</div>"
        + "<div class=\"expenseItemReceipt\">"
          + "<input type=\"file\" accept=\"image/JPEG\">"
        + "</div>"
        + "<input class=\"expenseSubmit tiny button\" type=\"submit\">"
      + "</form>"

    );

  });

  $('.mainContainer').on('submit', '.newBudget', function(event) {

      event.preventDefault();

      var newbudget = {

        name:$(this).find('.budgetItemName input').val(),
        amount:$(this).find('.budgetItemAmount input').val(),
        category:$(this).find('.budgetItemCategory option').val(),
        expense:["s"]

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
