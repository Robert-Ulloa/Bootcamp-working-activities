const Validate = require('../validate.js');

describe('Validate', () => {
  let validator;

  beforeAll(() =>{
    validator = new Validate();
  });
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  test('isPassword should return false whtn the password is less than 8 characters', ()=>{
    expect(validator.isPassword('Ab1')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  test('isPassword should return false whtn the password does not contain at least 1 uppercase letter', ()=>{
    expect(validator.isPassword('ABCDEFGH1')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  test('isPassword should return false whtn the password does not contain at least 1 lowercase letter', ()=>{
    expect(validator.isPassword('Abcdefgh')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  test('isPassword should return false whtn the password does not contain at least 1 number', ()=>{
    expect(validator.isPassword('Abcdefgh')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  test('isPassword should return true when the password is at least 8 characters long and contains an uppercase letter, a lowercase letter, and a number', () => {
    expect(validator.isPassword('Abcdefgh1')).toBe(true);
  });
});
