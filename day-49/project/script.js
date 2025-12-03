var allelem = document.querySelectorAll('button')

allelem.forEach(function(elem){
    elem.addEventListener('click',function(){
        if(elem.innerHTML=='Add friend'){
            elem.innerHTML='Remove friend'
        }else{
            elem.innerHTML='Add friend'

        };

    })

})