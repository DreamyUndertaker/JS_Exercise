let arr = {};
function countFromArr() {
    const array = [1, 1, 1, 'test', 'test']
    array.forEach(item => {
        arr[item] = (arr[item] || 0) + 1;
    });
    return arr;
};
arr = countFromArr();

console.log(arr);