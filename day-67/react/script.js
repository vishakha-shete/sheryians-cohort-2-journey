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

import parent from './parent.js';

const root = ReactDOM.createRoot(document.querySelector('#paro'))
root.render(parent())


var h1 = React.createElement('h1', null, 'main hoon vish')
var h2 = React.createElement('h2', null, 'main hoon sarthak')
var div = React.createElement('div', { id: parent }, [h1, h2])
var container = document.querySelector('#container')
var Root = ReactDOM.createRoot(container)
Root.render(div)


var div = React.createElement('div', null, 'i know your wish')
var container = document.querySelector('#vish')
var Root = ReactDOM.createRoot(container)
Root.render(div)


// function poho() {
//     return React.createElement('poho', null, 'helllo')
// }
// var foot = ReactDOM.createRoot(document.querySelector('#poho'))
// root.render(poho())