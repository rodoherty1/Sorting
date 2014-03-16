
function generateInputArray (size, max) {
	var ret = [];
	for (var i=0; i<size; i++) {
		ret.push(Math.floor((Math.random()  * max)+ 1));
	}
	return ret;
}


function mergeSort(subArray) {
	if (subArray.length <= 1) return subArray;
	
	var mid = Math.floor(subArray.length /2);
	
	var left = mergeSort(Array.prototype.slice.call(subArray, 0, mid));
	var right = mergeSort(Array.prototype.slice.call(subArray, mid));
	
	var i=j=k=0;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			subArray[k++] = left[i++];
		} else { 
			subArray[k++] = right[j++];
		}
	}	
		
	while (i < left.length) subArray[k++] = left[i++];
	while (j < right.length) subArray[k++] = right[j++];
	
	return subArray;
}

function log(message) {
	console.log(message);
}

function printArray(arr) {
	var s1 = [];
	for (var i=0; i<arr.length; i++) {
		s1.push (' ' + pad(arr[i], 2) + ' ');
	}	
	log(s1.join(''));
	log('');
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = '0' + s;
    return s;
}

var theArray = generateInputArray(process.argv[2], process.argv[3]);
printArray(theArray);
printArray(mergeSort(theArray));

