/*Simple bank-account program*/
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

/*Set up starting balance and arrays*/
var start = 1000;
var withdraw = [];
var deposit = [];

/*Prompt user for first action*/
var response = prompt('Your current balance is $1,000. Would you like to make a (d)eposit, (w)ithdrawal, or (q)uit and view your balance? ');

/*Loops for when user wants to make deposit or withdraw*/
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
/*Generating new balance when user wants to quit*/
if(response === 'q'){
  var sumD = 0;
  for(var D = 0; D < deposit.length; D ++){
    sumD += deposit[D];
  }
  /*Optional:console.log('Deposit amounts: $'+deposit+ '.');*/
  console.log(chalk.green('Total deposits: $'+sumD+ '.'));

  var sumW = 0;
  for(var W = 0; W < withdraw.length; W ++){
    sumW += withdraw[W];
  }
    /* Optional:console.log('Withdrawal amounts: $'+withdraw+ '.');*/
    console.log(chalk.red('Total withdrawals: - $'+sumW+ '.'));

  var balance = start + sumD - sumW;

/*Applying the $50 overdraft fee when balance falls below $0*/
  if(balance < 0){
    balance += -50;
  }

/*Letting user know new balance*/
  console.log(chalk.yellow('Your new balance is $'+balance+'.'));
  }


