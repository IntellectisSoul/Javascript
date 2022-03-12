> Math.PI;
3.141592653589793
 
> Math.SQRT2;
1.4142135623730951
 
> Math.E; // Euler constant
2.718281828459045
 
> Math.LN2; // Neperian log of 2
0.6931471805599453
 
> Math.LN10; // Neperian log of 10
2.302585092994046

/*To get a number between a min and a max value, use this formula: val = ((max - min) * Math.random()) + min
And here is an utility function:
*/
function getRandomValue(min, max) {
    return ((max - min) * Math.random()) + min;
}
 
> getRandomValue(5, 10);
5.064160540161435
Math and rounding methods round(), ceil(), floor()
round: to get the closest integer value.

//For example Math.round(Math.random()); will return 0 or 1.

Indeed, if Math.random() returns a value above 0.5, Math.round of this value will return 1, if the value is below 0.5, Math.round will return 0:
> Math.round(Math.random());
1
 
> Math.round(Math.random());
0
 
> Math.round(Math.random());
1
 
> Math.round(Math.random());
1
//Get the min and the max of two values with Math.min(a, b) and Math.max(a, b)
> Math.min(12, 4);
4
 
> Math.max(12, 4);
12
//A useful function that restricts a value between  min and  max bounds:

function restrictValue(value, min, max) {
    return Math.min(Math.max(1, value), max);
}
 
> restrictValue(40, 1, 20);
20
 
> restrictValue(-10, 1, 20);
1
 
> restrictValue(10, 1, 20);
10
Math functions for arithmetical computations sin(), cos(), tan(), atan(), atan2(), pow(), sqrt()
> Math.pow(2, 8); // 2^8
256
 
> Math.sqrt(9);
3
 
> Math.sin(Math.PI/2);
1
 
> Math.cos(Math.PI/2);
6.123233995736766e-17