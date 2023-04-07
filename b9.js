function pushArray(...args) {
    let arr = [];

    for (let i = 0; i < args.length; i++) {
        if(Array.isArray(args[i])) {
            for (let j = 0; j < key.length; j++) {
                arr.push(key[j]);
            }
        }else{
            arr.push(args[i]);
        }
    }

    return arr;
}

console.log(pushArray(1,23,32,1));