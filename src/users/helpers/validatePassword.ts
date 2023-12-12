function validatePassword(password: string, password2: string) {
  var minNumberofChars = 8;
  var maxNumberofChars = 16;

  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*=+-_])[a-zA-Z0-9!@#$%^&*=+-_]{6,16}$/;

  if (password !== password2) {
    return { error: "Passwords do not match." };
  }

  if (
    password?.length < minNumberofChars ||
    password?.length > maxNumberofChars
  ) {
    return { error: "Password length must be between 8 - 16 characters" };
  }
  if (!regularExpression.test(password)) {
    return {
      error:
        "Password should contain atleast one number and one special character",
    };
  }
}

export default validatePassword;
