function sumArray (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;


    }

    return sum;

}

const numbs = [5, 6, 7, 8];

const res = sumArray(numbs);

console.log('sum of array is', res)