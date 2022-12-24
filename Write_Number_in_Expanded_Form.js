// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const numArray = num.toString().split("");
  let result = "";
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== "0") {
      result += ` ${numArray[i]}${"0".repeat(numArray.length - i - 1)}`;
      if (i <= numArray.length - 1) result += " +";
    }
  }
  return result.substring(0, result.length - 2).substring(1, result.length - 1);
}