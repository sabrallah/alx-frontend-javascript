// 8-clean_set.js

/**
 * cleanSet - Returns a string of set values that start with a specific string.
 * @param {Set} set - The Set to clean.
 * @param {string} startString - The starting string to filter set values.
 * @returns {string} - String containing set values that start with the specified string, separated by -.
 */
function cleanSet(set, startString) {
  // Using the Array.from method to convert the set to an array
  const setArray = Array.from(set);

  // Using the filter method to keep only values that start with the specified string
  const filteredValues = setArray.filter((value) => value.startsWith(startString));

  // Using the map method to append the rest of the string after the specified startString
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));

  // Using the join method to concatenate values with -
  const resultString = cleanedValues.join('-');

  // Returning the final result
  return resultString;
}

// Exporting the function to make it available for other modules
export default cleanSet;
