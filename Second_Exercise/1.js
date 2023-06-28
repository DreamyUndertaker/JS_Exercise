function sum(first, second, third, fourth, fifth) {
    let result = 0;

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    for(let i = 0; i < args.length; i++){
        
        console.log(args[i]); 

        if(typeof(args[i]) === Number){
            i++          
        }
        else{
            result += args[i];
            
        }

    }


    return(result);
}

console.log(sum(1, 2, 3, 4, 5));