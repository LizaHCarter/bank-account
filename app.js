var prompt = require('sync-prompt').prompt;

var start = 1000;
var withdraw = [];
var deposit = [];

var response = prompt('Your current balance is $1,000. Would you like to make a (d)eposit, (w)ithdrawal, or (q)uit and view your balance? ');

while(response === 'd' || response === 'w'){
  if(response === 'd'){
    var amountD = prompt('Deposit amount? $');
    amountD = parseFloat(amountD);
    deposit.push(amountD);
    response = prompt('What would you like to do next? (w,d,q) ');
  }
  if(response === 'w'){
    var amountW = prompt('Withdrawal amount? $');
    amountW = parseFloat(amountW);
    withdraw.push(amountW);
    response = prompt('What would you like to do next? (w,d,q) ');
  }
}

if(response === 'q'){
  var sumD = 0;
  for(var D = 0; D < deposit.length; D ++){
    sumD += deposit[D];
  }
  console.log('Deposit amounts: $'+deposit+ '.');
  console.log('Total deposits: $'+sumD+ '.');

  var sumW = 0;
  for(var W = 0; W < withdraw.length; W ++){
    sumW += withdraw[W];
  }
    console.log('Withdrawal amounts: $'+withdraw+ '.');
    console.log('Total withdrawals: - $'+sumW+ '.');

  var balance = start + sumD - sumW;

  if(balance < 0){
    balance += -50;
  }

  console.log('Your new balance is $'+balance+'.');
  }


