
function groupByField(arr, field) {
const groupedObj = {};
for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const value = obj[field];
    if (groupedObj[value]) {
        groupedObj[value].push(obj);
    } else {
        groupedObj[value] = [obj];
    }
    }
    return groupedObj;
}

const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
const res = groupByField(arr, 'test');
console.log(res);