var counter = katzDeliLine.length; 
function takeANumber(katzDeliLine) {
  katzDeliLine.push(counter);
  counter++;
  return `Welcome. You are number ${counter} in line.`;
}
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
    var firstElement = deliLine.shift();
  //  return `Currently serving ${firstElement}.`;
    return "Currently serving " + firstElement + ".";
}

function currentLine(line) {
  if (line.length === 0) { 
  return "The line is currently empty.";
  }
  else
  var numbersandnames = [];
  for (var i = 0; i < line.length; i++) {
    numbersandnames.push((i + 1) + ". " + line[i]);
  }
    return "The line is currently: " + numbersandnames.join(', ');
=======
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
deliLine.push(name);
return `Currently serving ${deliLine}.`;
}

function currentLine() {
  
>>>>>>> 605c798410d5498173978d8b57cc9168344570ea
}