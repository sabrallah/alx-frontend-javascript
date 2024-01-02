export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (let idx = 0; idx < newArray.length; idx += 1) {
    newArray[idx] = appendString + newArray[idx];
  }
  return newArray;
}
