//we know the concept of array and yes we are just going to work on that

var array = [1, 2, 3, 4, 5, 6, 7]
console.log(array);


//we also know about the object

// var obj = {
//     user:'vishakha',
//     age : 22 ,
//     last : 'shete'
// }
// console.log(obj.user);


// we just do something intresting

var arr = [
    {
        user: 'vishakha',
        age: 22,
        city : 'akola'
    },
    {
        user: 'prashita',
        age: 20,
        city : 'amaravati'

    },
    {
        user: 'pallav',
        age: 34,
        city : 'hinganghat'

    },
    {
        user: 'gauri',
        age: 36,
        city : 'wardha'

    },
    {
        user: 'shruti',
        age: 26,
        city : 'nanded'

    }
]

console.log(arr[0].user);


// lets understand someting new
var sum = 0
arr.forEach(function(elem){
    sum = sum + elem.age
})
console.log(sum/arr.length);
