/* eslint-disable no-lonely-if */
'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if (array.length === 0) {
		return false;
	} else if (array.length === 1) {
		return array[0] === target;
	} else {
		const medIdx = Math.floor(array.length/2);
		if (array[medIdx] === target) {
			return true;
		} else {
			if (target > array[medIdx]) {
				return binarySearch(array.slice(medIdx + 1), target);
			} else {
				return binarySearch(array.slice(0, medIdx), target);
			}
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
