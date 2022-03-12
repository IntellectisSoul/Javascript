
var entSpend = 300;
var eatSpend = 200;
var tranSpend = 400;

if (entSpend > 500) {
    console.log('Alert!Entertainment Expenses > $500');
} else if (entSpend > 300) {
    if (eatSpend > 250) {
        console.log("Alert! Entertainment Expenses >$300 and Eating out Expenses > $250");
} else if (tranSpend > 400) {
        console.log('Alert! Entertainment Expenses >$300 and Transportation Expenses > $400');
    } else {
        console.log('You are OK!');
    }
} else {
    console.log('You are OK!')
}
