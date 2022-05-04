function number(arr) {
    for (let index = 0; index < arr.length; index++) {
        if(arr.length == arr[index]){
            arr[index] = index
        }
        
    }
    console.log(arr);
}

let arr = [5,4,6,3,2,1];

number(arr);


