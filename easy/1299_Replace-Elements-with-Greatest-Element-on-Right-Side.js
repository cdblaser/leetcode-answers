// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/

var replaceElements = function (arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }

  return arr;
};
