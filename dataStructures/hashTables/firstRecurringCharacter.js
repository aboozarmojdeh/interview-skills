// [2,5,3,3,5,2,3,5,1,2,4];
function firstRecurringCharacter1(input) {  // O(n^2)
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) !== i) {
      return input[i];
    }
  }
  return undefined;
}

function firstRecurringCharacter2(input) {  // O(n)
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2,5,3,3,5,2,3,5,1,2,4]));
