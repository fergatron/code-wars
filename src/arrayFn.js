let arrayFn = {};

/**
* Evalutes two submitted arrays and returns an array with the difference between the two.
* https://www.codewars.com/kata/523f5d21c841566fde000009
* @param Array 1, Array 2
* @return Array
*/
arrayFn.diff = function(a, b) {
    return a.filter(function(item, index) {
        return b.indexOf(item) < 0;
    });
}

module.exports = arrayFn;
