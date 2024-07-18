class Validate {}

Validate.prototype.isPassword = (password) => {
    //Write code that checks if the password is less than 8 characters and returns false if so.
  if (password.length < 8){
    return false;
  }

  // Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasUppercase && hasLowercase && hasNumber;

};

module.exports = Validate;
