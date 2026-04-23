# day-148 
 -  in todays class we are creating view products 
 -  in which the products created by seller we can view that product here 
 -  for view project fistlly i create a screen as dashboard with jsx ui 
 -  we created file dashboard.jsx in pages folder 
 - i have to fetch product data for this data i allready created hook called handlegetsellerproducts this function is available in our hook folder if i call this function this function calls a api in backend and those products seller added to cart this api feched all those products abd those products we are setting up in our product state 
 - 

 - design the seller dashboard so that seller can see all its products 

 this is the data in seller products state
 <data>
 ....
 </data>

 here we completed creating our dashboard page 
 - now we have to work on make pages protected 
 - means seller only can create a product only seller can acces a dashboard products normal user cannot access the products so buyer cannot acccess this pages not create a products buyer onlly buys a products
 - this task mainlly devide in two parts
 1) create protected components 
 2) wrap create product page and <sellerdashboard-page>

  1) create protected components 
  - so in this task we are creting a protected components
  - component name is protected
  - working of this componennt where u wrap this component that whole componenet became protected those role u are defining their only those roles u can accessed their 
  - in this protected component firstlly we need to find out our user is buyer or seller if the user is seller we then user can acceessed to create-product and dashbord page but buyer cannot 

  so in pages folder we are creating protected.jsx file done with all things
   2) wrap create product page and <sellerdashboard-page> 
   created a product page also done with all 



   now lets explore normal buyer side 

   we are showing a product created by seller to buyer 
   so now lets two feature feature is like user side feature 
   # user can see all the listed products and able to see detil about an single product on different page 
   features:
   - 1) user can see all the products 
   - 2) user can see details about   any products on diferent page
   - 3)  create api for fetaching all the products for user 
   - for this we have to create two apis 
   - 4) create page for the all products 
   - for this we have to create a service function the api we call in backend it interact with that api 
   - then we have to create state for for product 
   - then hooks it saves api data into state 
   - after doing this we get pur ui

  -done with all this 
