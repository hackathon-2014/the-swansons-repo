var item;

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
