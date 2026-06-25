REACT-THREE-FIBER

- react three fiber is created on three.js
- react three fiber is created on the bases of three.js 
- those classses are in three js those class in react three fiber 
- the reason behind of making a react three fiber because your three js components are not declarative 
- declarative in the sence the type of writing the component 
- so for writing the components in the declartive form we created react three fiber 
- react three fiber is a react renderer for three js 
- react three fiber is super easy
- react three js complete its work by own
- lets make comparisom betwee both 
three.js          | react-three-fiber
 scene            |  <canvas>
 camera           |  <mesh>
camera-position   |  <box-geometry> 
  geometry        |  <meshbasicmaterial>
    mesh          |  <mesh>
  renderer        |  <canvas>
  cnvas           |
  renderer-render |

  - you dont have set the camera and all this are thing u dont have to write 
  - initial setup done using this only 
  - we have to setup the react folder 
  - firstlly install the dependencies called
  - npm i three @reacr-three/fiber @react-three/drei
  - whenever your creating a component the first letter is needed to be a capital in react 
  - in react three fiber it is in camel casing and the element which gives a react three fiber is a canvas element 
  - it runs into the canvas tag  
  - if u created the component out out the canvas it gives u a error
  - so for that we right a component into the canvas and into that we wright our code  so which we are creating it into a canvas element 
  - you dont need to resize it it will resize automatically 
  - but the react three is easy when u learn three js properlly 
  -in three js parameters u add for this we have to put in like a args 
  - in react-three.js we use intead requestanimation-frame a useframes it is imbuild with it and because of we only implement into canvas creating a new element 
  - in two frames time is callled delta 
  - instanced
  = it is optimization technique 
  = if i tell u that u have to make one thing again and again i want it like for 200 300 time a mesh
  = so i can reapeat the same procedure again and again??
  - no i can make one geomentry acount and make a copies using that 
  - so this is called intanceness 
  - so lets create it 