let table = 5;             // Unit of table
let operator = 'multiplication'
operator = GetValueFromUser("operator");
table = GetValueFromUser("table")

// Write the message into the page
let el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  let greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  let i = 1;                 // Set counter to 1
  let msg = '<h2>Multiplication Table</h2>'; 
           // Message  
  if (operator === 'multiplication') {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  } 
  return msg;
}
