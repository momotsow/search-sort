 //Quicksort Program
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
        }

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original Quicksort array: ");
console.log(myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted Quicksort array: ");
console.log(sortedArray);

//Merge Sort Program

function merge_sort(left_part,right_part) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			results.push(right_part[j]);
			j++;
		} 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
			results.push(left_part[i]);
			i++;
		} else {
			results.push(right_part[j]);
			j++;
		}
    }
    //return sorted results
	return results;
}

console.log("merge sort res: ");
console.log( merge_sort([1,3,4], [3,7,9]));


//Insertion Sort Program
function insertion_Sort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log("insertion sort res: ");
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));


// //Selection Sort Program
// // Selection sort with O(n^2) time complexity

function Selection_Sort(ar, compare_Function) {

    function compare(a, b) {
     return a - b;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;
  
   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < ar.length; i += 1) {
      index = i;
      min = ar[i];
  
      for (var j = i + 1; j < ar.length; j += 1) {
        if (compare_Function(min, ar[j]) > 0) {
          min = ar[j];
          index = j;
        }
      }
  
      temp = ar[i];
      ar[i] = min;
      ar[index] = temp;
    }
  
    //return sorted arr
    return ar;
  }
  
  console.log("Ascending Order of Selection Sort");
  console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; })); 
  console.log("Descending Order of Selection Sort");
  console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));


//   //Borgosort Program
  function Bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}


var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Borgosort Array Elements"); 
console.log(arra); 
console.log("Sorted Borgosort Array Elements"); 
console.log(Bogosort(arra));

