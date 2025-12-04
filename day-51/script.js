
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

arr.forEach(function (elem, idx) {
    console.log(elem, idx);
})

// it prints elem and Index

var arr1 = [
    {
        user: 'harsh',
        age: 23
    },
    {
        user: 'ajay',
        age: 23
    },
    {
        user: 'atul',
        age: 23
    },
]

arr1[1] = 'vishakha'
console.log(arr1);

// const{
//     name: vishakha,
//     age : 22
// }