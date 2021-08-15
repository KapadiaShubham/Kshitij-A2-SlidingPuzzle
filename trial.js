const { get } = require("http");

let empCell=15;
var array = [" "];
for (i = 1; i < 16; i++) {
    array.push(String(i));
}
array.shift();
array.push(" ");
var solArr = [...array];
// console.log(solArr);
// Functions
function swap(e, cellNo) {
    let temp = array[e];
    array[e] = array[cellNo];
    array[cellNo] = temp;
}
// ------------------------------------------------------------------------------------
function moveIt(pos, n) {
    let e = empCell;
    if (pos == "rt" && (e == 2 || e == 7)) {
        swap(e, n);
    }
    else if (pos == "lt" && (e == 1 || e == 4)) {
        swap(e, n);
    }
    else if (pos == "lb" && (e == 8 || e == 13)) {
        swap(e, n);
    }
    else if (pos == "rb" && (e == 11 || e == 14)) {
        swap(e, n);
    }
    else if (pos == "t" && (e == n + 1 || e == n - 1 || e == n + 4)) {
        swap(e, n);
    }
    else if (pos == "b" && (e == n + 1 || e == n - 1 || e == n - 4)) {
        swap(e, n);
    }
    else if (pos == "r" && (e == n + 4 || e == n - 4 || e == n - 1)) {
        swap(e, n);
    }
    else if (pos == "l" && (e == n + 4 || e == n - 4 || e == n + 1)) {
        swap(e, n);
    }
    else if (e == n + 4 || e == n - 4 || e == n + 1 || e == n - 1) {
        swap(e, n);
    }
    else {
        return 0;
    }
    return 1;
}
// cellNo = 0, 1, 2, ..... ,15;
function cellPosition(cellNo) {
    let pos = "";
    let remainder = cellNo % 4;
    if (remainder == 0) {
        pos = "l";
        // console.log("left");
    }
    else if (remainder == 3) {
        pos = "r";
        // console.log("right");
    }
    if (cellNo == 0 || cellNo == 1 || cellNo == 2 || cellNo == 3) {
        pos += "t";
        // console.log("top");
    }
    else if (cellNo == 12 || cellNo == 13 || cellNo == 14 || cellNo == 15) {
        pos += "b";
        // console.log("bottom");
    }
    console.log(pos);
    return pos;
}
// cellPosition(0);
function cellNumber(block) {
    for (i = 0; i < 16; i++) {
        if (cellDivs[i] == block) {
            // console.log(i);
            return i;
        }
    }
}
// Write Number according to the array
function updateNumbers() {
    for (i = 0; i < 16; i++) {
        if (array[i] == " ") {
            empCell = i;
        }
    }
}
// Function - random Int in a range
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function - arrange numbers randomly
function randomArrayShuffle() {

    let shuffleTimes=getRandomInt(100,200);
    while(shuffleTimes--)
    {
            let shuffle=getRandomInt(1,4); //    1/2/3/4
        // console.log(shuffle);
        let temp=0;
        let cellNo;
        let pos=cellPosition(empCell);
        if (shuffle == "1" && pos != "b" && pos != "lb" && pos != "rb") {
            cellNo = empCell + 4;
            temp=1;
        } else if (shuffle == "3" && pos != "t" && pos != "lt" && pos != "rt") {
            cellNo = empCell - 4;
            temp=1;
        } else if (shuffle == "2" && pos != "l" && pos != "lb" && pos != "lt") {
            cellNo = empCell - 1;
            temp=1;
        } else if (shuffle == "4" && pos != "r" && pos != "rb" && pos != "rt") {
            cellNo = empCell + 1;
            temp=1;
        }
        
        if (temp&&moveIt(pos, cellNo)) {
            updateNumbers();
            
        }
    }
    console.log(array);
    

    // var currentIndex = array.length,
    //     temporaryValue,
    //     randomIndex;
    // while (0 !== currentIndex) {
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;
    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    //     updateNumbers();
    // }
    //array is now shuffled randomly = ["d", "c", "b", "e", "a"]
    // return array;
}
randomArrayShuffle(); // For the first time on reload

