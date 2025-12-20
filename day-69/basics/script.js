//today entering the next part of react js
//js- means javascript
//jsx- jsx is a combination of javascript and html

var h1 = React.createElement('h1',null,'hey i am vishakha from akola')
var h2 = Reqct.createElement('h2',null,'who are you')

var div =React.createElement('div',{id:vish},[h1,h2])
var box = document.querySelector('#box')

var root = ReactDOM.createRoot(box)

root.render(div)