

// function groupByField(){
//     const array = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
//     array.forEach(item => {
//         arr[item] = (arr[item] || 0) + 1;
//     });
//     return arr;
// }
// arr = groupByField();

// console.log(arr);


function groupByDate() {
    let arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
    //свертка массива во временный объект, с датами в качестве ключей
    const temp = arr.reduce((acc, elem) => {
      // делим строку по пробелу и извлекаем 0й элемент '2018-03-05 12:00' -> '2018-03-05'
        const date = elem.date.split(' ')[0];
      //если ключа-даты еще нет в объекте, записываем туда пустой массив
        if(!acc[date]) {
            acc[date] = [];
            
        }
      // ложим текущий элемент в соответствующий массив
        acc[date].push(elem);
        return acc;
        
    }, {});
    // извлекаем все ключи получившегося объекта в массив
    // и преобразуем массив ключей в массив значений
    return Object.getOwnPropertyNames(temp).map(k => temp[k]);
    
}

