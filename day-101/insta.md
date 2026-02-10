<!-- today we are going to create a instagram project this is my first project of backend-->

we are building basic feature of instagram

Authentication
- register 
  - save user data
- login 
  - share token to user
- logot 

<!-- we are learning new feature today is token blacklisting -->
( otp base registration building in this project rather another one)


==> post :
- user create 
- can see the feed
- like the post (collection types)
- save the post
-

===> user
- following
- followers

User data = {
    username : string,
    emsil: string,
    password:string,
    bio:string,
    Profile_image: string
}

Register 
wee have a server and database in which mongodb when one user send a request on server at the time of register it gives email and user name more also when user gives a email and username firstlly server checks it if user is allready exist with same email if user not exists then server creates a quarey in mongodb databse.the queary is email queary then database find on email basis any user exist in our database if yes then whichever the result is send to the user if not then check usename basis exists or not then again database send a result of the queary
for checking the email or name is exist or not ur are calling the database two times then waht will happen is wee call to the database only one time or only one call checks usename and email both bases any user exists or not if we done this one time then we get resut in one time it is efficient 
if ANYONE EXIST WITH A NAME OR EMAIL IT WILL RETURN US WE ARE CHECKING BOTH AT ONE TIME