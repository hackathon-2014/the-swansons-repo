var render = function(template, data, element) {

  var markup = _.template(template,data);

  element.html(markup);

};

var timelineTmpl = [

  "<%_.each(data, function(element, index, list) {%>",

    "<h2><%= element.name %></h2>",
    "<div class=\"bdgtAmount\">",
      "<h3>$<%= element.amount %></h3>",
    "</div>",
    "<div class=\"expenseDesc\">",
      "<h3 class=\"expenseName\"><%= element.expense.name %></h3>",
      "<h4 class=\"expenseDate\"><%= element.expense.date %></h4>",
      "<h4 class=\"expenseReceipt\"><%= element.expense.receipt %></h4>",
      "<h4 class=\"expenseCat\"><%= element.expense.category %></h4>",
    "</div>",

  "<%})%>"

].join('');

var budgetTmpl = [

  "<%_.each(data, function(element, index, list) {%>",

    "<li><%= element.budget[0].budg_name %>",

  "<%})%>"

].join('');
