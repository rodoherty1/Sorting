
function generateInputArray (size, max) {
	var ret = [];
	for (var i=0; i<size; i++) {
		ret.push(Math.floor((Math.random()  * max)+ 1));
	}
	return ret;
}


function quickSort(left, right) {

	if (right - left <= 0) {
		return;
	} else {
		var pivotValue = theArray[right];
		log('New pivot value = theArray[' + right + '] : ' + pivotValue);

		var pivotLocation = partitionArray(left, right, pivotValue);
		log('New pivot location = ' + pivotLocation);
	
		quickSort(left, pivotLocation-1);
		quickSort(pivotLocation+1, right);

	}
}


function partitionArray(left, right, pivotValue) {
	var lp = left-1;
	var rp = right;

	while(true) {
		while (theArray[++lp] < pivotValue); 

		while (rp > 0 && theArray[--rp] > pivotValue);

		printPartitionArray(theArray, lp, rp, pivotValue);

		if (lp >= rp) {
			break;
		} else {
			swap (lp, rp);
			log('Swapped values at index[' + lp + '] with index[' + rp + ']');
			printPartitionArray(theArray, lp, rp, pivotValue);
		}
	}
	swap (lp, right);
	log('Exiting - Swapped values at index[' + lp + '] with index[' + right + ']');
	printPartitionArray(theArray, lp, rp, pivotValue);

	return lp;
}


function swap(left, right) {
	var tmp = theArray[left];
	theArray[left] = theArray[right];
	theArray[right] = tmp;
}

function log(message) {
	console.log(message);
}

function printPartitionArray(theArray, lp, rp, pivotValue) {
	var s1 = [];
	var s2 = [];
	for (var i=0; i<theArray.length; i++) {
		s1.push (' ' + pad(theArray[i], 2) + ' ');

		if (i === lp) {
			s2.push (' LP ');
		} else if (i === rp) {
			s2.push (' RP ');
		} else {
			s2.push ('    ');
		}
	}
	log(s1.join(''));
	log(s2.join(''));
	log('');
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = '0' + s;
    return s;
}

var theArray = generateInputArray(process.argv[2], process.argv[3]);

quickSort(0, theArray.length-1);

printPartitionArray(theArray, 0, 0, -1);


