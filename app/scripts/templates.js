var timelineTmpl = [

  "<%_.each(mainProfileData, function(element, index, list) {%>",

    "<h2><%= element.name %></h2>",
    "<div class=\"bdgtAmount\">",
      "<h3>$<%= element.amount %></h3>",
    "</div>",
    "<div class=\"expenseDesc\">",
      "<h3><%= element.expense.name %></h3>",
      "<h4><%= element.expense.date %></h4>",
      "<h4><%= element.expense.receipt %></h4>",
    "</div>",

  "<%})%>"

].join('');
