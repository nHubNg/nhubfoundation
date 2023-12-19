export const obscureEmail = (email) => {
    const atIndex = email.indexOf('@');
  if (atIndex !== -1) {
    const firstPart = email.substring(0, atIndex).slice(0, 4);
    const maskedFirstPart = `${firstPart}${'*'.repeat(4)}`;
    const secondPart = email.substring(atIndex);
    return `${maskedFirstPart}${secondPart}`;
  }
  return email; // If there's no @ sign in the email
  }