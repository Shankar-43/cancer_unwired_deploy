function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
function isAlphanumeric(password) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(password);
}

function updatePasswordStrength(password) {
  let strength = 0;
  let color = "";

  // Check for at least 8 characters
  if (password.length >= 8 && !isAlphanumeric(password)) {
    strength = 4;
    color = "green"; // Strong passwords are marked in green
  } else if (password.length >= 6 && !isAlphanumeric(password)) {
    strength = 3;
    color = "orange"; // Moderate passwords are marked in orange
  } else if (password.length >= 3 && !isAlphanumeric(password)) {
    strength = 2;
    color = "red"; // Weak passwords are marked in red
  } else if (isAlphanumeric(password)) {
    if (password.length >= 8) {
      strength = 4;
      color = "green"; // Strong passwords are marked in green
    } else if (password.length >= 6) {
      strength = 3;
      color = "orange"; // Moderate passwords are marked in orange
    } else if (password.length >= 3) {
      strength = 2;
      color = "red"; // Weak passwords are marked in red
    } else {
      strength = 1;
      color = "red"; // Very weak passwords are marked in red
    }
  } else {
    strength = 1;
    color = "red"; // Very weak passwords are marked in red
  }

  // Check for passwords longer than 15 characters
  if (
    password.length > 15 &&
    /[a-zA-Z]/.test(password) &&
    /\d/.test(password) &&
    /[\W_]/.test(password)
  ) {
    strength = 5; // Very strong passwords are marked in a new level
    color = "green";
  }

  // Determine password strength and corresponding message
  let strengthText = "";
  if (strength === 5) {
    strengthText = "Very Strong";
  } else if (strength === 4) {
    strengthText = "Strong";
  } else if (strength === 3) {
    strengthText = "Moderate";
  } else if (strength === 2) {
    strengthText = "Weak";
  } else {
    strengthText =
      "Password must contain [a-z] & [0-9] and at least 8 characters";
  }

  return {
    text:
      strengthText ===
      "Password must contain [a-z] & [0-9] and at least 8 characters"
        ? strengthText
        : `Your password is ${strengthText}`,
    color: color,
  };
}

// formValidation.js

const validateForm = (formData) => {
  if (!formData.firstName) {
    return "Please enter your first name";
  }

  if (!formData.lastName) {
    return "Please enter your last name";
  }

  if (
    !formData.email ||
    formData.email == null ||
    formData.email == "" ||
    !validateEmail(formData.email)
  ) {
    return "Please enter a valid email address";
  }

  if (!formData.password) {
    return "Please enter your password";
  } else if (formData.password.length <= 7) {
    return "Password must be at least 8 characters";
  }

  if (formData.password !== formData.confirmPassword) {
    return "Passwords do not match";
  }

  if (!formData.role) {
    return "Please select your role";
  }

  return null; // Indicates the form is valid
};

export { validateEmail, updatePasswordStrength, validateForm };
