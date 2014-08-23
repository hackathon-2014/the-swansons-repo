var newBudgetTmpl = [

  "<%_.each(mainProfileData, function(element, index, list) {%>",

  "<form class=\"newBudget\">",
    "<div class=\"budgetItemName\">",
      "<h2>Budget Name:</h2>",
      "<input type=\"text\" placeholder=\"Enter Budget Name\" required>",
    "</div>",
    "<div class=\"budgetItemAmount\">",
      "<h2>Budget Amount:</h2>",
      "$<input type=\"number\" placeholder=\"Enter Budget Amount\" required>",
    "</div>",
  "</form>"

].join("");
