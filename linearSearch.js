function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 3, 5, 6, 3, 2, 443, 12, 32, 4, 11], 11));
console.log(linearSearch([-5, 3, 5, 56, 35, 2, 443, 125, 324, 43, 2], 3));

// O(n)
