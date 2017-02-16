//Unit Tests for UC11
// Deleted the tests for the user stories that I didn't work on
//USER STORY 1
QUnit.test("Test the oddFilter function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = oddFilter(a);
    assert.deepEqual(result, [3, 5, 1], "We expect result to be 3, 5, 1");
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    result = oddFilter(a);
    assert.deepEqual(result, [1, 3, 5, 7, 9, 11], "We expect result to be 1, 3, 5, 7, 9, 11");
    a = [2,4,6]
    result = oddFilter(a);
    assert.deepEqual(result, [], "We expect result to be []");
});
//USER STORY 4
QUnit.test("Test the factorial function", function (assert){
    var n = 5;
    var result = factorial(n);
    assert.equal(result, 120, "We expect 120.");
});

//USER STORY 5
QUnit.test("Test the combinations function", function (assert){
    var n = 5;
    var k = 3;
    var result = combinations(n,k);
    assert.equal(result, 10, "We expect 10.");
});
