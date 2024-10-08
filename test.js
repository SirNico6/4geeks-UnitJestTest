const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("two euros should be 2.14 dollars", function() {
    expect(fromEuroToDollar(2)).toBe(2.14);
})

test("Seven dollars should be 1095.5 yen)", function() {
    expect(fromDollarToYen(7)).toBe(1095.5);
})

test("Two hundred and fifty should be 217.5 pounds", function() {
    expect(fromYenToPound(250)).toBe(217.5);
})