const onearray = [1,2,3,4,5,6,7,8,9,10];

const twoarray = [];

for (let i = 0; i < onearray.length; i++) {
    const array = [onearray[i]];
    if (onearray[i+1]) {
        array.push(onearray[i+1])
    }

    twoarray.push(array)
    
}
console.log(twoarray);