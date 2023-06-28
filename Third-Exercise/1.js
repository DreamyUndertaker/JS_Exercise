const arr = [1, null, "test", undefined];
function convertArrToObj(){
    let object = [];
    arr.forEach(function(item, i, arr) {
        object.push( i + ": " + item);
        
    });
    return object
    
}
const object = convertArrToObj();
console.log(object);
