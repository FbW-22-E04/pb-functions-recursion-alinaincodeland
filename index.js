// Write a JavaScript program to compute the sum of an array of integers


function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1))
    }

}

sum([1, 2, 3, 4, 5, 6]) 


