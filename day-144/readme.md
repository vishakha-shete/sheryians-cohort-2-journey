we have browser and we can open multiple tabs in it 
- so here we have two things jisase humarri puri application banti hain uske do parts rehate hain frontend and backend 
lets assume
forntend runs on 5173
backend runs on 3000
in browser we open page 5173 in which we have multiple tabs and we open in it one url called http://localhost:5173
- and the frontend runs on 5173 it runs through  vite 
- with the help of we are opening a page 5173 
- lets say user wants to register for registration user has a one form in which input fiels present username email password then register button whenever the user clicks on register then that time we are submitting our data in backend side and in backend we are submitting on perticular url callled http://localhost:3000/api/auth/register
but your frontend running on different port and ur requesting on different origin port no : 3000 then browser tells us you cannot do this so this scene comes out of this then browsers sends us a cors origin the browsers tells us your requesting on different browser not allowes thiss 

- today we are learning proxies 
in frontend in vite.config.js we are using a proxies 
-server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
      }
      }

      then make changes in auth.api.js file remove http://localhost:5173

      after click on login its working before whenever you not set proxy it request directlly on backend port and with cors pollicy it blocks but now what we done eith vite 
      - we set one proxy 
      the taget of this api is 
      - http://localhoste:3000
      -it means before we sending request directlly on backend but this time we are send a request on vite 
      - when your in browser and not telling any host or post in which tab your working with this port host and port sendding request on the backend 
      - when i run npm run dev in frontend folder then vite runs our temporarial development server start our devlopment server where only frontend runs 
      - here vite runs one development server where frontend runs 
      - and using this port we can access a frontend in our backend development server 
      - after that backend server response returning to the all request wich are comming 

      -proxy tells any request start with 
      /api it forward to http://localhost:3000 

      so lets understand flow
      - browser send a request on vite development server and vite development sends this request send on backend server and backend server forward this request with response on vite and then vite again return it in frontend 
      - vite server runs only development time dont runn it in production 

      then next lets learn google Auth
      - firstlly we have to setup google auth in .env folder 
      - so firstlly i need client id and client secrete and callback url 