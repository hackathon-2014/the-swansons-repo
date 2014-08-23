var render = function(template, data, element) {

  var markup = _.template(template,data);

  element.html(markup);

};

var timelineTmpl = [

  "<%_.each(data, function(element, index, list) {%>",

    "<h2><%= element.name %></h2>",
    /*"<div class=\"bdgtAmount\">",
      "<h3>$<%= element.amount %></h3>",
    "</div>",
    "<div class=\"expenseDesc\">",
      "<h3 class=\"expenseName\"><%= element.expense.name %></h3>",
      "<h4 class=\"expenseDate\"><%= element.expense.date %></h4>",
      "<h4 class=\"expenseReceipt\"><%= element.expense.receipt %></h4>",
      "<h4 class=\"expenseCat\"><%= element.expense.category %></h4>",
    "</div>",*/

  "<%})%>"

].join('');

var budgetTmpl = [

  "<%_.each(data, function(element, index, list) {%>",

    "<% for (var i=0; i < element.budget.length; i++) { %>",

    "<li><%= element.budget[i].budg_name %></li>",

  "<%};})%>"

].join('');

var passTmpl = [
  "<%_.each(data, function(element, index, list) {%>",
  "<% if(element.name === user) %>",

    "<p> Welcome!!!! To make signing-in easy in the future, save this id: <span> <%= element._id %> </span> and enter it in the \"Sign-In\" text-box",

  "<%})%>"
].join('');
