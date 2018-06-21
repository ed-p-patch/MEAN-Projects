function heapify(arr){
    var temp = arr[0];
    arr.push(undefined); // put undefined in array[tail]
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp; // array = [undefined, etc, etc ,etc ,etc]
    var child = arr.length-1; //start at end
    var parent;

    for(var z = arr.length; z > 1; --z){
        if(child % 2 == 0){
            parent = child/2;
            if(arr[child] < arr[parent]){
                temp = arr[parent];
                arr[parent] = arr[child];
                arr[child] = temp;
            }
        }
        else{
            parent = (child - 1)/2;
            if(arr[child] < arr[parent]){
                temp = arr[parent];
                arr[parent] = arr[child];
                arr[child] = temp;
            }
        }
        child--;
    }
    console.log(arr);
}
// sample output
heapify([20, 3, 8, 14, 9, 6, 2]);
// alters the array to [undefined, 2, 6, 3, 9, 8, 14, 20]