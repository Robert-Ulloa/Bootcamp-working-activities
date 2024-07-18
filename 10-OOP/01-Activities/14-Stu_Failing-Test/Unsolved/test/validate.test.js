// TODO: Import the Validate class.
// validate.test.js

const Validate = require('../validate');

test('isPassword should return false for an empty string', () => {
    const validator = new Validate();
    expect(validator.isPassword("")).toBe(false);
});

// TODO: Describe a testing suite for checking the functionality of the Validate class.

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
