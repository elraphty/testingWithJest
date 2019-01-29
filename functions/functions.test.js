const functions = require('./functions');

test('Adds 2 + 2 = 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to Not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Is null to return null values', () => {
  expect(functions.isNull()).toBeNull();
});

test('Check value to return false values', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});