export const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the regex pattern and has a length greater than 5
    return emailRegex.test(email) && email.length > 5;
  };
  
  export const isValidPassword = (password) => {
    // Check if the password has a length greater than 5
    return password.length > 5;
  };
  