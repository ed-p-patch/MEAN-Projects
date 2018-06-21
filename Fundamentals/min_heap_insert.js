function compare_items(arr, parent, child){
    if(arr[parent] > arr[child]){
        var temp = arr[parent];
        arr[parent] = arr[child];
        arr[child] = temp;
        compare_items(arr, ((child/2)/2), (child/2));
    }
    else{ return arr; }
}

function min_insert(arr, value){
    if(Array.isArray(arr)){
        var new_array = arr;
        if(arr.length > 0){
            new_array.push(value);
            var loc = new_array.length;
            
            if(loc % 2 != 0){ loc -= 1; }
            var p = loc/2;

            compare_items(new_array, p, new_array.length-1);
        }
        else{ 
            new_array[1] = value; 
        }
        //   console.log(new_array); // Why is this behaving in this fashion?
        return new_array;
    }
};

var a = [];
var b = [undefined, 3, 8, 10, 11, 9, 20, 14];
//console.log(min_insert(a, 13)); // should return [undefined, 13]
console.log(min_insert(b, 7)); // should return [undefined, 3, 7, 10, 8, 9, 20, 14, 11]