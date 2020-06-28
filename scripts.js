var temp = [];

/**
 * calculatePath finds simplest path to reach array end
 */
let calculatePath = function(arr) {
    const size = arr.length;
    let steps = stepCounter(arr, size, size);
    let path = [];

    if(steps <= size){
        for(let i = 0; i < steps; i++){
            path[i] = temp[size - steps + i + 1];}
    }else{
        path[0] = -1;
    }

    return path;
};

/**
 * stepCounter finds minimum required steps to reach array end
 */
let stepCounter = function(arr, size, depth) {

    if (size === 1)
        return 0;
    if (arr[0] === 0)
        return Number.MAX_SAFE_INTEGER;

    let steps = Number.MAX_SAFE_INTEGER;

    for (let i = size - 2; i >= 0; i--) {
        if (i + arr[i] >= size - 1) {
            let sub_steps = stepCounter(arr, i + 1, depth - 1);
            if (sub_steps !== Number.MAX_SAFE_INTEGER) {
                steps = Math.min(steps, sub_steps + 1);
                temp[depth] = arr[i];
            }
        }
    }

    return steps;
};