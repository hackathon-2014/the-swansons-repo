var database = "http://tiy-fee-rest.herokuapp.com/collections/brendansTeam"

$(document).ready(function() {

  $('.addBudget').on('click', function(event) {

    event.preventDefault();
    $('.mainContainer').html(

      "<form class=\"newBudget\">"
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

      "<form class=\"newExpenseItem\">"
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
        + "<input class=\"expenseSubmit\" type=\"submit\">"
      + "</form>"

    );

  });

  $('.mainContainer').on('submit', '.newBudget', function(event) {

      event.preventDefault();

      var newbudget = {

        name:$(this).find('.budgetItemName input').val(),
        amount:$(this).find('.budgetItemAmount input').val(),
        category:$(this).find('.budgetItemCategory option').val(),
        expense:[]

      };

  });

});
