function removeFromMinHeap(arr){
    var n = 1;
    var temp;
    var sorted = false;
    var removed = arr[1];
    arr[n] = arr[arr.length - 1];
    arr[arr.length - 1] = removed;
    arr.pop();
    
    while(!sorted){
        if(arr[n] > arr[n * 2]){
            temp = arr[n];
            arr[n] = arr[n * 2];
            arr[n * 2] = temp;
            n = n * 2;
        }
        else if(arr[n] > arr[(n * 2) + 1]){
            temp = arr[n];
            arr[n] = arr[(n * 2) + 1];
            arr[(n * 2) + 1] = temp;
            n = (n * 2) + 1;
        }
        else{
            sorted = true;
            console.log(arr);
        }
    }
    return removed;
}
console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]));
console.log(removeFromMinHeap([undefined, 8]));