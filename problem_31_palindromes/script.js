const palindromes = function (string) {
  // Define all valid characters (letters and numbers)
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  // Convert string to lowercase, split into characters,
  // filter out non-alphanumeric characters, and join back to a clean string
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  // Reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // Compare the cleaned string with the reversed string and return true or false
  return cleanedString === reversedString;
};

module.exports = palindromes;

palindromes("A car, a man, a maraca."); // true
palindromes("racecar"); // true
palindromes("tacos"); // false
