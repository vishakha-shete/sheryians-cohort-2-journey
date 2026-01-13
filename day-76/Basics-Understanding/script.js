localStorage.clear()
//localStorage.clear() is method to crear a localStorage

localStorage.setItem('user','sarthak')
// localStorage.setItem('user','sarthak') is used to set item in local storage 
// it requires key and value

localStorage.setItem('city','bhopal')

localStorage.setItem('name','vaishnavi')

localStorage.setItem('age','70')
var user = localStorage.getItem('user')
console.log(user);

var age = localStorage.getItem('age')
console.log(age);

console.log(localStorage.getItem('user'));

localStorage.removeItem('name')

//
var arr = [10,20,30,40,50,60]
localStorage.setItem('arr',arr)

console.log(localStorage.getItem('arr'));

//
var obj = {
    user:'vishakha',
    age:22,
    city:'Akola',
}
localStorage.setItem('obj',JSON.stringify(obj))
console.log(localStorage.getItem('obj',obj));

//
var marks ={
    maths:60,
    computer:80,
    english: 90,
}

localStorage.setItem('marks',JSON.stringify (marks))
console.log(localStorage.getItem('marks',(marks)));

// ****->SESSION-STORAGE

sessionStorage.setItem('user','vishakha')
