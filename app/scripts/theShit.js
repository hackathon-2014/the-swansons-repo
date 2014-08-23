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
    console.log('events start');
    $('#loginForm').on('submit', function(e) {
      e.preventDefault();
      console.log('username go');
      var user = $(this).find('#username').val();
      var pass = $(this).find('#password').val();
      console.log('user: ' + user + ', pass: ' + pass + '.');
      var member = {
        name: user,
        password: pass,
        budget: ['']
      };
      swanson.createBudget(member);
      console.log('username end');
    });
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
        swanson.renderBudget(itemTmpl, items, $("#itemList"));

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
