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

test('Check object should be my name', () => {
  expect(functions.createUser()).toEqual({
    name: 'Raphael',
    surname: 'Eyerin'
  });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 1100;
  expect(load1 + load2).toBeLessThanOrEqual(1800);
});