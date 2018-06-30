function BST(){
    this.root = null;
}

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;

    this.insert = function(root, num){
        if(this.value > num){
            this.left = num;
        }
        else{ // Equal to or Greater than
            this.right = num;
        }
    }
}
first.prototype.insert = function(val){
    if(first.root.value == null){ first.root = val; return first.root; }

}

// https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
// AND 
// https://en.m.wikipedia.org/wiki/Self-balancing_binary_search_tree
// These sites were helpful to understanding and memorizing an efficient solution
var first = new BST();
first.root = Node(20);
first.insert(30);

// arr = [30, 15, 18, 45, 32, 44, 2, 5, 94, 100];
// for(var x = 0; x < arr.length; ++x){ }