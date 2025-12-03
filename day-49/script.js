var allh1 = document.querySelectorAll('h1')
allh1[2].innerHTML = 'bye byeee'
console.log(allh1)

///it is similiar to array but not exactlly a array
//we cannot add map on it

allh1.forEach(function(elem){
    console.log(elem.innerHTML);
});

var outer = document.querySelector('#outer')
console.log(outer.childNodes);