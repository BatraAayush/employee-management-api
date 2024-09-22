const isRequired = (field, label) => {
  if (!field) {
    throw new Error(`${label} Required`);
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    throw new Error(`Invalid Email`);
  };
};

const validatePhoneNumber = (number) => {
  if(number.toString().length !== 10) {
    throw new Error(`Phone Number must contain 10 digits.`);
  }
}

module.exports = { isRequired, validateEmail, validatePhoneNumber };
