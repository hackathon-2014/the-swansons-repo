var createBudget = function () {

  $.ajax({

    url:database,
    type:"PUT",
    data:budget

  });

};
