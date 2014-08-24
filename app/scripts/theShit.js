var item;

var goTime = function($target) {
  var timelineTmpl = '';
  for (var k = 0; k < 2; k ++) {
    timelineTmpl += "<h3>" + data.budget[k].budg_name + "</h3><h3>" + data.budget[k].budg_amount + "</h3>"
    var current_budget = data.budget[k].budg_amount;
    for (var j = 0; j < 2; j++) {
      current_budget -= data.budget[k].budg_expence[j].ex_amount;
      timelineTmpl += "<div class=\"expenseDesc\"><h3 class=\"expenseName\">" + data.budget[k].budg_expence[j].ex_name + "</h3><h3 class=\"expenseDate\">" + data.budget[k].budg_expence[j].ex_date + "</h3><h3 class=\"expenseAmount\">Cost: " + data.budget[k].budg_expence[j].ex_amount + "</h3><h3 class=\"remainingBudget\">Remaining Budget: " + current_budget + "<h3></div>"
    }
  };

  "<% for (var i=0; i < 2; i++) { %>",
  //       //   "<div class=\"expenseDesc\">",
  //       //     "<h3 class=\"expenseName\"><%= element.budg_expence[i].ex_name %></h3>",
  //       //     "<h3 class=\"expenseDate\"><%= element.budg_expence[i].ex_date %></h3>",
  //       //     "<h3 class=\"expenseAmount\"><%= element.budg_expence[i].ex_amount %></h3>",
  //       //   "</div>",

  $target.html(timelineTmpl);
};

$(document).ready(function () {
  console.log('main.js is go');
  swanson.init();
});

var swanson = {
  url: "http://tiy-fee-rest.herokuapp.com/collections/brendansTeam",
  init: function () {
    console.log('init start');
    swanson.initEvents();
    swanson.initStyling();
    console.log('init end');
  },
  initEvents: function () {
    //posts log-in info
    console.log('events start');
    $('.login').on('submit', function(e) {
      e.preventDefault();
      console.log('username go');
      window.user = $(this).find('.login_username').val();
      window.pass = $(this).find('.login_password').val();
      console.log('user: ' + user + ', pass: ' + pass + '.');
      var member = {
        name: user,
        password: pass,
        budget: ['']
      };

      $('.profileInfo').children('.info').children('.username').append(user);
      $('.login').hide();
      $('.login_id_form').hide();
      $('section').removeClass('hide');

      $.ajax({
          url: swanson.url,
          data: member,
          type: 'POST',
          success: function (response) {
            //swanson.getBudget();
            console.log('post is go');
            $.ajax({

              url:database,
              type:"GET",
              success:function(response){
                console.log('get is go');
                window.data = response;

                render(passTmpl, data, $('.mainContainer'));
                console.log('should render the damn template');
              }

            });

          }
        });

        console.log('create end');
      console.log('username end');
      console.log('post id number');

      //render(passTmpl, swanson.url, $('.mainContainer'));
      console.log('id number should have been posted');
    });


    //CLICKING SUBMIT ON THE LOG-IN FORM
    $('.login_id_form').on('submit', function(e) {
      e.preventDefault();
      console.log('username go');
      var sign_in_id = window.sign_in_id = $(this).find('.login_id').val();

      $.ajax({

        url:database + '/' + sign_in_id,
        type:"GET",
        success:function(response){
          console.log('get is go');
          window.data = response;
          console.log(data);
          goTime($('.mainContainer'));
          console.log('should render the damn template');

          $('.profileInfo').children('.info').children('.username').append(response.name);
          $('.login').hide();
          $('.login_id_form').hide();
          $('section').removeClass('hide');
        }

      });

        console.log('create end');
      console.log('username end');
      console.log('post id number');

      //render(passTmpl, swanson.url, $('.mainContainer'));
      console.log('id number should have been posted');
    });
    //shows budget
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
    $('.addBudget').on('dblclick', function(event) {

      event.preventDefault();
      $('.mainContainer').html('');
      //swanson.getBudget();

    });

    //SHOW and REMOVE EXPENSES
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
    $('.addExpense').on('dblclick', function(event) {

      event.preventDefault();
      $('.mainContainer').html('');
      //swanson.getBudget();

    });

    //CREATING BUDGETS
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
    $('.mainContainer').on('submit', '.newBudget', function(event) {

        event.preventDefault();
        var newbudget = {

          budg_name:$(this).find('.budgetItemName input').val(),
          budg_amount:$(this).find('.budgetItemAmount input').val(),
          budg_type:$(this).find('.budgetItemCategory option').val(),
          budg_expence:[""]

        };

        $.ajax({

          url:database + "/" + sign_in_id,
          type:"GET",
          success:function(response) {

            window.data = response;
            data.budget.push(newbudget);
            console.log(data)

            $.ajax({

              url:database + "/" + sign_in_id,
              type:"PUT",
              data:data,
              success:function() {

                console.log("NEW BUDGET ADDED");

              }


            });

          }

        });

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

    /*Event to render budget timeline*/
  },
  initStyling: function () {
    console.log('styling start');
    swanson.getBudget();
    console.log('styling end');

  },
  renderBudget: function (tmpl, data, $target) {
    console.log('render start');
    console.log('render end');
  },
  getBudget: function () {
    console.log('get start');

    $.ajax({
      url: swanson.url,
      type: 'GET',
      success: function (response) {
        var items = window.items = response;
        //swanson.itemCount(items);
        //swanson.renderBudget(itemTmpl, items, $("#itemList"));
        swanson.renderBudget(budgetTmpl, items, $("#itemList"));
      }
    });

    console.log('get end');

  },
  createBudget: function (thing) {
    console.log('create start');

    $.ajax({
        url: swanson.url,
        data: thing,
        type: 'POST',
        success: function (response) {
          //swanson.getBudget();

        }
      });

    console.log('create end');

  },
  deleteBudget: function (id) {
    console.log('delete start');

    $.ajax({
      url: swanson.url + "/" + id,
      type: 'DELETE',
      success: function () {
          swanson.getBudget();
      }
    });

    console.log('delete end');

  },
  editStatus: function (id, updatedItem) {

    $.ajax({
      url: swanson.url + "/" + id,
      type: "PUT",
      data: updatedItem,
      success: function (response) {
        // something goes here
        console.log(response);
        swanson.getBudget();
      }
    });
  }
}
