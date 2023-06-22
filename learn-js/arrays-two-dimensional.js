const matrix = [ // 3x3 matrix
[1, 2, 3], // row 0
[4, 5, 6, 99, 101], // row 1
[7, 8, 9, 8], // row 2
[898,3553,5336,3,4,422,42242,42]
];

//console.log(matrix.length);

console.log(matrix[3][1]);

function printRowElements(array) {
    for(let i = 0; i < array.length; i++) {
        console.log("Data:", array[i]);
    }
}

function calculateSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

var total = 0;
for(let rowIndex=0; rowIndex<matrix.length; rowIndex++) {
    var row = matrix[rowIndex];
    //printRowElements(row);
    var rowSum = calculateSum(row);
    total = total + rowSum;
    console.log("sum of row:", rowSum);
    console.log("----------------");
    
}

console.log("Total:", total);


//print all elements of matrix
/*
for(let rowIndex=0; rowIndex<matrix.length; rowIndex++) {
    for(let colIndex=0; colIndex<matrix[rowIndex].length; colIndex++) {
        console.log("CellData:", matrix[rowIndex][colIndex])
    }   
    console.log("----------------");
}*/