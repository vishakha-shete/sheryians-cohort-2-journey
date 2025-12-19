// here we are going to learn about waht exactlly the react

//React-js = react js is library

// -GSAP - GSAC IS FOR MOVING ANIMATION
// -LINIS -  IS FOR SCROLLING SMOOTHNESS
// -SWIPER -  IS FOR SLIDERS
// -THREE JS - IS FOR 3D ELEMENTS
// - REACT-JS - IT IS USED FOR CREATING A UI

// REACT = react is used to create user interface /fontend

//ANGULAR - angular is a framework 

//LIBRARY - library is something in which we can do specific modification on web 

// GSAP - gsap is library which is used to create moving animation
//gsap - CDN - contact delivery network 

// react - react is ues for create user interface
//ReactDom- is used to connnect react and dom
// gsap.to('#box',{
//     x:500,
//     duration:3,
//     delay:1
// })


var h1 = React.createElement('h1',null,'main hoon vish')
var h2 = React.createElement('h2',null,'main hoon sarthak')
var container = document.querySelector('#container')
var Root = ReactDOM.createRoot(container)
Root.render(h1)


var h2 = React.createElement(h2,null,'hey how are u')
var root = ReactDOM.createRoot(document.querySelector('#vish'))
root.render(h2)
