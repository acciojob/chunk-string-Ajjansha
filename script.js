function stringChop(str, chunkLength) {
  // If string is null → return empty array
  if (str === null) return [];

  const result = [];

  // Convert chunkLength to number (prompt returns string)
  chunkLength = Number(chunkLength);

  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.substring(i, i + chunkLength));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
