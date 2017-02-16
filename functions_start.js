//THESE FUNCTIONS CONTAIN BUGS!!!!!
// deleted functions i did not work on (user stories 2,3, and 6)
/**
 * Returns a array of odd numbers from an array
 * @param {Array} a An array of numbers
 * @returns {Array} An array of odd numbers
 */
function oddFilter(a) {
    var result = [];
    for (i = 0; i < a.length; ++i) {
        if (a[i] % 2 != 0) {
            result.push(a[i]);
        }
    }
    return result;
}
/**
 * Returns n!
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    var result = 1;
    for (var i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}

/**
 * Returns combinations nCk
 * @param {number} n The number to choose from
 * @param {number} k The number of items to be selected
 * @returns {number} nCk
 */
function combinations(n, k) {
    var c;
    c = factorial(n) / (factorial(k) * (factorial(n - k)));
    return c;
}
