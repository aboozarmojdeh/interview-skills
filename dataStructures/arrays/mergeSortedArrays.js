// mergeSortedArrays([0,2,3],[2,4,5,7])
// mergeSortedArrays([0, 2, 3, 6, 9], [2, 4, 5, 7]);
const mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    // console.log(mergedArray);
    if (array1Item < array2Item || !array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
};

mergeSortedArrays([0, 2, 3, 6, 9], [2, 4, 5, 7]);
