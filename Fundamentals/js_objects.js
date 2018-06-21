//Edmund Patch
// Challenge 1
function display_arr_1(arr){
    for(var x = 0; x < arr.length; ++x){
        console.log("Name: "+arr[x].name+", Cohort: "+arr[x].cohort)
    }
    return 0
};

var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

display_arr_1(students);

// Challenge 2
var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function display_arr_2(arr){
    console.log("EMPLOYEES");
    for(var x = 0; x < arr.employees.length; ++x){
        console.log((x+1)+" - "+arr.employees[x].first_name.toUpperCase()+", "+arr.employees[x].last_name.toUpperCase()+" - "+(arr.employees[x].first_name.length+arr.employees[x].last_name.length));
    }
    console.log("MANAGERS");
    var b = arr.managers;
    for(var x = 0; x < b.length; ++x){
        console.log((x+1)+" - "+b[x].first_name.toUpperCase()+", "+b[x].last_name.toUpperCase()+' - '+(b[x].first_name.length+b[x].last_name.length));
    }
};

display_arr_2(users);